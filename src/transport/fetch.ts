import type { Transport } from "../types"
import { GET, POST } from "../params"
import { format, parse } from "../shims/url"

export class FetchTransport implements Transport {
  private async fetch(req: Request) {
    const res = await fetch(req)

    // handle http errors
    if (!res.ok) {
      // @ts-expect-error
      throw new Error(res.statusText, {
        cause: res,
      })
    }

    return res
  }

  async get(url: string, params: GET = new GET()) {
    const { query, ...parsed } = parse(url, true)

    const urlWithQueryParams = format({
      ...parsed,
      query: {
        ...query,
        ...Object.fromEntries(params.entries()),
      },
    })

    const init: RequestInit = {
      method: "GET",
    }

    return this.fetch(new Request(urlWithQueryParams, init))
  }

  async post(url: string, params: POST = new POST()) {
    const body = params.getFormData()

    const init: RequestInit = {
      method: "POST",
      body,
    }

    return this.fetch(new Request(url, init))
  }
}
