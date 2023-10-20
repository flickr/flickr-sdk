import { Transport } from "../types"

export class MockTransport implements Transport {
  private response: string

  constructor(response: any) {
    this.response =
      typeof response === "string" ? response : JSON.stringify(response)
  }

  async get(): Promise<Response> {
    return new Response(this.response)
  }

  async post(): Promise<Response> {
    return new Response(this.response)
  }
}
