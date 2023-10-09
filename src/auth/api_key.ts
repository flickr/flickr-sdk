import type { Auth } from "../types"
import type { Params } from "../params"

export class APIKeyAuth implements Auth {
  constructor(private apiKey: string) {
    if (typeof apiKey === "undefined") {
      throw new Error("apiKey must be provided")
    }
  }

  async sign(req: Request, params: Params) {
    params.set("api_key", this.apiKey)
  }
}
