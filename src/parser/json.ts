import type { Parser } from "../types"

export class JSONParser implements Parser {
  parse(res: Response) {
    return res.json()
  }
}
