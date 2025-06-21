// @ts-check
import { createFlickr } from "flickr-sdk"
import { resolve } from "node:path"
import { readFileSync } from "node:fs"
import { createServer } from "node:https"
import { ok } from "node:assert"

/**
 * This example demonstrates the full OAuth flow described here:
 * https://www.flickr.com/services/api/auth.oauth.html
 */

// first, sign up for an application to get a consumer key and secret.
// users will authorize your app to make calls to the api on their behalf.
// https://www.flickr.com/services/apps/create/apply/?

ok(
  process.env.FLICKR_CONSUMER_KEY,
  "missing FLICKR_CONSUMER_KEY environment variable",
)
ok(
  process.env.FLICKR_CONSUMER_SECRET,
  "missing FLICKR_CONSUMER_SECRET environment variable",
)

const consumerKey = process.env.FLICKR_CONSUMER_KEY
const consumerSecret = process.env.FLICKR_CONSUMER_SECRET

// your application will need some sort of database to store request
// tokens and oauth tokens for the user. you should use an actual
// database instead of in-memory maps.

var db = {
  users: new Map(),
  oauth: new Map(),
}

// obtain a request token from the Flickr API. the user will then be
// redirected to flickr to authorize your application. if they do,
// they will be redirected back to your application with a request
// token verifier, which you will exchange for the real oauth token.

async function getRequestToken(req, res) {
  const { oauth } = createFlickr({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    oauthToken: false,
    oauthTokenSecret: false,
  })

  try {
    // request an oauth token and secret, supplying a callback url
    const { requestToken, requestTokenSecret } = await oauth.request(
      "https://localhost:3000/oauth/callback",
    )

    // store the request token and secret in the database
    db.oauth.set(requestToken, requestTokenSecret)

    // redirect the user to flickr and ask them to authorize your app.
    // perms default to "read", but you may specify "write" or "delete".
    res.statusCode = 302
    res.setHeader("location", oauth.authorizeUrl(requestToken, "write"))
    res.end()
  } catch (err) {
    console.error(err)
    res.statusCode = 400
    res.end(err.message)
  }
}

// congratulations! the user has authorized your app. now you need to
// verify and exchange the request token for the user's oauth token
// and secret. at this point, we no longer need our request token
// and secret so we can get rid of them, and we can store the user's
// oauth token and secret in our database to make authenticated api calls.

async function verifyRequestToken(req, res, searchParams) {
  const requestToken = searchParams.get("oauth_token")
  const oauthVerifier = searchParams.get("oauth_verifier")

  // retrieve the request secret from the database
  const requestTokenSecret = db.oauth.get(requestToken)

  const { oauth } = createFlickr({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    oauthToken: requestToken,
    oauthTokenSecret: requestTokenSecret,
  })

  try {
    const { nsid, oauthToken, oauthTokenSecret } =
      await oauth.verify(oauthVerifier)

    // store the oauth token and secret in the database
    db.users.set(nsid, {
      oauthToken: oauthToken,
      oauthTokenSecret: oauthTokenSecret,
    })

    // we no longer need the request token and secret so we can delete them
    db.oauth.delete(requestToken)

    // log our oauth token and secret for debugging
    // NB don't do this in production!
    console.log("oauth token:", oauthToken)
    console.log("oauth token secret:", oauthTokenSecret)

    // create a new Flickr API client using the oauth credentials
    const { flickr } = createFlickr({
      consumerKey,
      consumerSecret,
      oauthToken,
      oauthTokenSecret,
    })

    // make an API call on behalf of the user
    const login = await flickr("flickr.test.login", {})
    console.log(login)

    res.end(JSON.stringify(login))
  } catch (err) {
    console.error(err)
    res.statusCode = 400
    res.end(err.message)
  }
}

// read the ssl cert and key from disk
function getcert(filename) {
  try {
    return readFileSync(resolve("examples", filename))
  } catch (err) {
    err.message = `${err.message}

    OAuth callback URLs **must be https**, so this example's server needs an SSL cert to run.
    Generate a self-signed cert by running \`make\` in this directory:

    $ cd ${resolve("examples")} && make
`
    throw err
  }
}

/** @type {import('node:https').ServerOptions} */
const options = {
  key: getcert("key.pem"),
  cert: getcert("cert.pem"),
}

// create a local server to handle the oauth callback
const server = createServer(options, function (req, res) {
  const url = new URL(req.url ?? "/", "https://localhost:3000")

  switch (url.pathname) {
    case "/":
      return getRequestToken(req, res)
    case "/oauth/callback":
      return verifyRequestToken(req, res, url.searchParams)
    default:
      res.statusCode = 404
      res.end()
  }
})

server.listen(3000, function () {
  console.log("Open your browser to https://localhost:3000")
})
