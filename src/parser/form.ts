import type { Parser } from "../types"
import { parse } from "../shims/querystring"

export class FormParser implements Parser {
  async parse(res: Response) {
    return parse(await res.text())
  }
}
