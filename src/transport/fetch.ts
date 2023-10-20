import type { Transport } from "../types"
import { GET, POST } from "../params"
import { format, parse } from "../shims/url"

export class FetchTransport implements Transport {
  constructor(private init: RequestInit = {}) {}

  async fetch(url: string, init: RequestInit) {
    const res = await fetch(url, init)

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
      ...this.init,
      method: "GET",
    }

    return this.fetch(urlWithQueryParams, init)
  }

  async post(url: string, params: POST = new POST()) {
    const body = params.getFormData()

    const init: RequestInit = {
      ...this.init,
      method: "POST",
      body,
    }

    return this.fetch(url, init)
  }
}
