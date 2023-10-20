import type { Auth, Transport } from "../../types"
import { POST_REGEXP, API } from "./api"
import { GET, POST } from "../../params"
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
      method: httpMethod,
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

    const res =
      payload instanceof POST
        ? await this.transport.post(req.url, payload)
        : await this.transport.get(req.url, payload)

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
}
