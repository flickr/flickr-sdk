// @ts-check
import { createFlickr } from "../dist/index.js"
import * as prettier from "prettier"
import { resolve } from "path"
import { writeFile } from "fs/promises"

/**
 * @typedef FlickrReflectionGetMethodInfoResponse
 * @property {Object} method
 * @property {string} method.name
 * @property {string} method.needslogin
 * @property {string} method.needssigning
 * @property {string} method.requiredperms
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

const { flickr } = createFlickr(process.env.FLICKR_API_KEY)

async function main() {
  // get all available methods
  const {
    methods: { method },
  } = await flickr("flickr.reflection.getMethods", {})

  // extract all of the method names
  const methods = method.map(({ _content }) => _content)

  console.log("Reflecting on %s methods", methods.length)

  // write out the type index file
  await index(resolve("src/services/rest/api.ts"), methods)

  // get info for the each method
  for (const method_name of methods) {
    console.log(".", method_name)

    const res = await flickr("flickr.reflection.getMethodInfo", {
      method_name,
    })

    // write out the type definition
    await typedef(resolve(`src/services/rest/${method_name}.ts`), res)
  }
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
 * @param {string[]} methods
 */
async function index(filepath, methods) {
  const imports = methods
    .map((method) => {
      return `import type { ${titleize(method)}Params } from "./${method}"`
    })
    .join("\n")

  const typemap = methods
    .map((method) => {
      return `"${method}": ${titleize(method)}Params`
    })
    .join("\n")

  const exports = methods
    .map((method) => {
      return `${titleize(method)}Params`
    })
    .join(", ")

  const source = `${imports}

export type API = { ${typemap} }

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
