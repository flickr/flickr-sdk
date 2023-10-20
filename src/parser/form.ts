import type { Parser } from "../types"
import { parse } from "../shims/querystring"

export class FormParser implements Parser {
  async parse(res: Response): Promise<Record<string, string>> {
    return parse(await res.text()) as Record<string, string>
  }
}
