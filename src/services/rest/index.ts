import type { Auth, Transport } from "../../types"
import type { API } from "./api"
import { GET } from "../../params"
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
    const req = new Request("https://api.flickr.com/services/rest", {
      method: "GET",
    })

    const payload = new GET()

    // method params
    for (const [key, value] of Object.entries(params)) {
      payload.set(key, value)
    }

    // required params
    payload.set("method", method)
    payload.set("format", "json")
    payload.set("nojsoncallback", "1")

    await this.auth.sign(req, payload)

    const res = await this.transport.get(req.url, payload)
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
}
