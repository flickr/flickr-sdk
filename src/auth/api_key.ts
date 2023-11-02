import type { Auth } from "../types"
import type { Params } from "../params"

export class APIKeyAuth implements Auth {
  constructor(
    private apiKey: string | (() => string) | (() => Promise<string>),
  ) {
    if (typeof apiKey === "undefined") {
      throw new Error("apiKey must be provided")
    }
  }

  async sign(method: "GET" | "POST", url: string, params: Params) {
    params.set("api_key", await this.getAPIKey())
  }

  async getAPIKey() {
    return typeof this.apiKey === "string" ? this.apiKey : await this.apiKey()
  }
}
