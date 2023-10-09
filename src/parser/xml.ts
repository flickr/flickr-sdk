import type { Parser } from "../types"
import { XmlElement, XmlNode, XmlText, parseXml } from "@rgrove/parse-xml"

function isXmlElement(node: XmlNode): node is XmlElement {
  return node.type === XmlNode.TYPE_ELEMENT
}

function isXmlText(node: XmlNode): node is XmlText {
  return node.type === XmlNode.TYPE_TEXT
}

export class XMLParser implements Parser {
  async parse(res: Response) {
    const xml = await res.text()

    console.log("xml", xml)
    const ast = parseXml(this.clean(xml))

    // the document should have one root node named "rsp"
    const { rsp } = this.jsify(ast.children[0])

    return rsp
  }

  clean(xml: string) {
    // remove the xml declaration
    return xml.replace(/^<\?xml.*\?>/, "")
  }

  jsify(node: XmlNode | XmlNode[]): any {
    // if it's a children array, collect them into a single object
    if (Array.isArray(node)) {
      return node.reduce((memo, n) => ({ ...memo, ...this.jsify(n) }), {})
    }

    // if it's an element, collect its attributes and children
    if (isXmlElement(node)) {
      return {
        [node.name]: {
          ...node.attributes,
          ...this.jsify(node.children),
        },
      }
    }

    // if it's a text node, return its content
    if (isXmlText(node)) {
      // skip whitespace nodes
      if (node.text.trim() === "") {
        return {}
      }
      return {
        _content: node.text,
      }
    }

    return {}
  }
}
