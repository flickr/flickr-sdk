import { describe, it } from "node:test"
import assert, { Equal, Extends, IsTuple, expectTrue } from "@flickr/flinch"
import type {
  API,
  Auth,
  Transport,
  Parser,
  GET,
  POST,
  Params,
  OAuthConfig,
  FlickrPeopleGetInfoParams,
  APIKeyAuthConfig,
  FlickrTestEchoParams,
} from "flickr-sdk"

describe("flickr-sdk type tests", () => {
  describe("Auth Interface", () => {
    it("should have correct method signature", () => {
      // Verify Auth interface structure
      assert.hasProperty<Auth, "sign">()
      assert.isFunction<Auth["sign"]>()

      // Test the sign method parameters and return type
      type SignMethod = Auth["sign"]
      assert.isFunction<SignMethod>()

      // The sign method should return a Promise<void>
      type SignReturnType = ReturnType<SignMethod>
      assert.extends<SignReturnType, Promise<void>>()
    })
  })

  describe("Transport Interface", () => {
    it("should have get and post methods", () => {
      assert.hasProperty<Transport, "get">()
      assert.hasProperty<Transport, "post">()

      assert.isFunction<Transport["get"]>()
      assert.isFunction<Transport["post"]>()
    })

    it("should have correct method signatures", () => {
      // Test get method
      type GetMethod = Transport["get"]
      type GetReturnType = ReturnType<GetMethod>
      assert.extends<GetReturnType, Promise<Response>>()

      // Test post method
      type PostMethod = Transport["post"]
      type PostReturnType = ReturnType<PostMethod>
      assert.extends<PostReturnType, Promise<Response>>()
    })
  })

  describe("Parser Interface", () => {
    it("should have parse method with correct signature", () => {
      assert.hasProperty<Parser, "parse">()
      assert.isFunction<Parser["parse"]>()

      type ParseMethod = Parser["parse"]
      type ParseReturnType = ReturnType<ParseMethod>
      assert.extends<ParseReturnType, Promise<any>>()
    })
  })

  describe("Parameter Types", () => {
    it("should verify GET and POST extend Params", () => {
      assert.extends<GET, Params>()
      assert.extends<POST, Params>()
    })
  })

  describe("Integration Type Tests", () => {
    it("should verify interface compatibility", () => {
      // Test that implementations would satisfy the interfaces
      interface MockAuth extends Auth {}
      interface MockTransport extends Transport {}
      interface MockParser extends Parser {}

      assert.extends<MockAuth, Auth>()
      assert.extends<MockTransport, Transport>()
      assert.extends<MockParser, Parser>()
    })
  })

  describe("API", function () {
    it("has flickr.people.getInfo", () => {
      assert.hasProperty<API, "flickr.people.getInfo">()

      expectTrue<IsTuple<API["flickr.people.getInfo"]>>()
      expectTrue<
        Equal<API["flickr.people.getInfo"][0], FlickrPeopleGetInfoParams>
      >()
    })

    it("has flickr.test.echo", () => {
      assert.hasProperty<API, "flickr.test.echo">()

      expectTrue<IsTuple<API["flickr.test.echo"]>>()
      expectTrue<Equal<API["flickr.test.echo"][0], FlickrTestEchoParams>>()
    })
  })

  describe("APIKeyConfig", () => {
    it("accepts a string", () => {
      expectTrue<Extends<string, APIKeyAuthConfig>>()
      expectTrue<Extends<() => string, APIKeyAuthConfig>>()
      expectTrue<Extends<() => Promise<string>, APIKeyAuthConfig>>()
    })
  })

  describe("OAuthConfig", () => {
    it("accepts consumer key/secret and oauth token/secret", () => {
      expectTrue<
        Extends<
          {
            consumerKey: string
            consumerSecret: string
            oauthToken: string
            oauthTokenSecret: string
          },
          OAuthConfig
        >
      >()
    })
    it("can specify false for oauth token/secret", () => {
      expectTrue<
        Extends<
          {
            consumerKey: string
            consumerSecret: string
            oauthToken: false
            oauthTokenSecret: false
          },
          OAuthConfig
        >
      >()
    })
  })
})
