import type { Auth, Transport } from "../../types"
import { POST_REGEXP, API } from "./api"
import { GET, POST, Params } from "../../params"
import { JSONParser } from "../../parser/json"

export interface Flickr {
  <T extends keyof API>(method: T, params: API[T]): Promise<any>
}

export class FlickrService {
  constructor(
    private transport: Transport,
    private auth: Auth,
  ) {}

  async call(method: string, params: Record<string, string>): Promise<any> {
    const httpMethod = this.getHTTPMethod(method)

    const req = new Request("https://api.flickr.com/services/rest", {
      method: this.getHTTPMethod(method),
    })

    const payload = httpMethod === "POST" ? new POST() : new GET()

    // method params
    for (const [key, value] of Object.entries(params)) {
      payload.set(key, value)
    }

    // required params
    payload.set("method", method)
    payload.set("format", "json")
    payload.set("nojsoncallback", "1")

    await this.auth.sign(req, payload)

    const res = await this.request(req, payload)

    const parser = new JSONParser()

    const json = await parser.parse(res)

    if (json.stat === "fail") {
      // @ts-expect-error
      throw new Error(json.message, {
        cause: res,
      })
    }

    return json
  }

  private getHTTPMethod(method: string) {
    return POST_REGEXP.test(method) ? "POST" : "GET"
  }

  private request(req: Request, payload: Params) {
    if (payload instanceof POST) {
      return this.transport.post(req.url, payload)
    }
    if (payload instanceof GET) {
      return this.transport.get(req.url, payload)
    }
    throw new Error("Invalid payload")
  }
}
