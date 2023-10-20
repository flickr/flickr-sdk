// @ts-check
import { createFlickr } from "flickr-sdk"
import * as prettier from "prettier"
import { resolve } from "path"
import { writeFile } from "fs/promises"
import compileRegexp from "stringlist-regexp"

/**
 * @typedef FlickrReflectionGetMethodInfoResponse
 * @property {Object} method
 * @property {string} method.name
 * @property {string} method.needslogin
 * @property {string} method.needssigning
 * @property {'1' | '2' | '3' | 1 | 2 | 3} method.requiredperms
 * @property {Object} method.description
 * @property {string} method.description._content
 * @property {Object} method.response
 * @property {string} method.response._content
 * @property {Object} errors
 * @property {Object[]} errors.error
 * @property {string} errors.error._content
 * @property {string} errors.error.code
 * @property {string} errors.error.message
 * @property {Object} arguments
 * @property {Object[]} arguments.argument
 * @property {string} arguments.argument._content
 * @property {string} arguments.argument.name
 * @property {string} arguments.argument.optional
 * @property {string} arguments.argument.type
 * @property {string} arguments.argument.description
 * @property {Object} explanation
 * @property {string} explanation._content
 */

/**
 * @param {FlickrReflectionGetMethodInfoResponse} res
 * @returns {'read' | 'write' | 'delete' | 'none'}
 */
const getPerms = ({ method }) => {
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
 * @param {FlickrReflectionGetMethodInfoResponse} res
 * @returns {'GET' | 'POST'}
 */
const getHTTPVerb = (res) => {
  switch (getPerms(res)) {
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
  /** @type {FlickrReflectionGetMethodInfoResponse[]} */
  const methods = []

  // get info for the each method
  for (const method of methodNames) {
    console.log(".", method)

    /** @type {FlickrReflectionGetMethodInfoResponse} */
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
 * @param {FlickrReflectionGetMethodInfoResponse} obj
 */
async function typedef(filepath, { method, arguments: args }) {
  const isOptional = (optional) => String(optional) === "1"

  // get the list of params, omitting the required api key
  const params = (args?.argument ?? []).filter(({ name }) => name !== "api_key")

  const source = `/**
 * This file was auto-generated on ${new Date().toISOString()}
 * ${method.name}
 * ${method.description?._content}
 */
export interface ${titleize(method.name)}Params {
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
 * @param {FlickrReflectionGetMethodInfoResponse[]} methods
 */
async function index(filepath, methods) {
  const imports = methods
    .map((method) => method.method.name)
    .map((method) => {
      return `import type { ${titleize(method)}Params } from "./${method}"`
    })
    .join("\n")

  const typemap = methods
    .map((method) => method.method.name)
    .map((method) => {
      return `"${method}": ${titleize(method)}Params`
    })
    .join("\n")

  const exports = methods
    .map((method) => method.method.name)
    .map((method) => {
      return `${titleize(method)}Params`
    })
    .join(", ")

  const POSTs = methods
    .filter((method) => getHTTPVerb(method) === "POST")
    .map((method) => method.method.name)

  // @ts-expect-error
  const regexp = compileRegexp(POSTs, true, true)

  const source = `
/**
 * This file was auto-generated on ${new Date().toISOString()}
 */
${imports}

export type API = { ${typemap} }

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

main()
