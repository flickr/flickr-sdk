// @ts-check
import { createFlickr } from "flickr-sdk"
import * as prettier from "prettier"
import { resolve } from "path"
import { stat, writeFile } from "fs/promises"
import compileRegexp from "stringlist-regexp"

/**
 * @param {import('flickr-sdk').FlickrReflectionGetMethodInfoResponse['method']} method
 * @returns {'read' | 'write' | 'delete' | 'none'}
 */
const getPerms = (method) => {
  switch (String(method.requiredperms)) {
    case "1":
      return "read"
    case "2":
      return "write"
    case "3":
      return "delete"
    default:
      return "none"
  }
}

/**
 * @param {import('flickr-sdk').FlickrReflectionGetMethodInfoResponse['method']} method
 * @returns {'GET' | 'POST'}
 */
const getHTTPVerb = (method) => {
  switch (getPerms(method)) {
    case "write":
    case "delete":
      return "POST"
    default:
      return "GET"
  }
}

async function main() {
  // @ts-expect-error
  const { flickr } = createFlickr(process.env.FLICKR_API_KEY)

  // get all available methods
  const {
    methods: { method },
  } = await flickr("flickr.reflection.getMethods", {})

  // extract all of the method names
  const methodNames = method.map(({ _content }) => _content)

  console.log("Reflecting on %s methods", methodNames.length)

  // keep track of all of the POST methods
  /** @type {import('flickr-sdk').FlickrReflectionGetMethodInfoResponse[]} */
  const methods = []

  // get info for the each method
  for (const method of methodNames) {
    console.log(".", method)

    const res = await flickr("flickr.reflection.getMethodInfo", {
      method_name: method,
    })

    // add the response to our collection of methods
    methods.push(res)
  }

  for (const res of methods) {
    const name = res.method.name
    // write out the type definition for this method
    await typedef(resolve(`src/services/rest/${name}.ts`), res)
    // if there isn't already a response file, write one out
    try {
      await stat(resolve(`src/services/rest/${name}.response.ts`))
    } catch {
      await response(resolve(`src/services/rest/${name}.response.ts`), res)
    }
  }

  // write out the type index file
  await index(resolve("src/services/rest/api.ts"), methods)
}

/**
 * Titleizes a method name
 * @param {string} str
 */
function titleize(str) {
  return str.replace(/\b(\w)/g, (s) => s.toUpperCase()).replace(/\./g, "")
}

/**
 * Writes out a type definition file for a given method
 * @param {string} filepath
 * @param {import('flickr-sdk').FlickrReflectionGetMethodInfoResponse} obj
 */
async function typedef(filepath, { method, arguments: args }) {
  /** @param {string | number} optional */
  const isOptional = (optional) => String(optional) === "1"

  // get the list of params, omitting the required api key
  const params = (args?.argument ?? []).filter(({ name }) => name !== "api_key")

  const source = `/**
 * This file was auto-generated on ${new Date().toISOString()}
 * ${method.name}
 * ${method.description?._content}
 * Permissions required: ${getPerms(method)}
 */
export type ${titleize(method.name)}Params = {
${params
  .map(
    ({ name, type = "string", optional = "1", _content }) =>
      `/**
 * ${_content}
 */
${name}${isOptional(optional) ? "?" : ""}: ${type}`,
  )
  .join("\n")}
}`

  const formatted = await prettier.format(source, {
    filepath,
    semi: false,
  })

  await writeFile(filepath, formatted, {
    encoding: "utf8",
  })
}

/**
 * Writes out the type index file
 * @param {string} filepath
 * @param {import('flickr-sdk').FlickrReflectionGetMethodInfoResponse[]} methods
 */
async function index(filepath, methods) {
  const imports = methods
    .map((method) => method.method.name)
    .map((method) => {
      const klass = titleize(method)
      return `import type { ${klass}Params } from "./${method}"
import type { ${klass}Response } from "./${method}.response"`
    })
    .join("\n")

  const typemap = methods
    .map((method) => method.method.name)
    .map((method) => {
      const klass = titleize(method)
      return `"${method}":[ ${klass}Params , ${klass}Response ]`
    })
    .join("\n")

  const exports = methods
    .map((method) => method.method.name)
    .map((method) => {
      const klass = titleize(method)
      return `${klass}Params, ${klass}Response`
    })
    .join(", ")

  const POSTs = methods
    .filter((method) => getHTTPVerb(method.method) === "POST")
    .map((method) => method.method.name)

  // @ts-expect-error
  const regexp = compileRegexp(POSTs, true, true)

  const source = `
/**
 * This file was auto-generated on ${new Date().toISOString()}
 */
${imports}

export type APIShape = {
  [key: string]: [params: Record<string,any>, response: any]
}

export type API = APIShape & { ${typemap} }

export const POST_REGEXP = /${regexp}/

export {${exports}}
`
  const formatted = await prettier.format(source, {
    filepath,
    semi: false,
  })

  await writeFile(filepath, formatted, {
    encoding: "utf8",
  })
}

/**
 * @param {string} filepath
 * @param {import('flickr-sdk').FlickrReflectionGetMethodInfoResponse} res
 */
async function response(filepath, res) {
  const source = `/**
 * ${res.method.name} response
 */
export type ${titleize(res.method.name)}Response = any`

  const formatted = await prettier.format(source, {
    filepath,
    semi: false,
  })

  await writeFile(filepath, formatted, {
    encoding: "utf8",
  })
}

main()
