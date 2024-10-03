import { Transport } from "../types"

export class MockTransport implements Transport {
  private responses: string[] = []

  constructor(response?: string) {
    if (response) {
      this.addMock(response)
    }
  }

  reset():void {
    this.responses = []
  }

  addMock(response: string): void {
    const stringResponse =
      typeof response === "string" ? response : JSON.stringify(response)
    this.responses.push(stringResponse)
  }

  async get(): Promise<Response> {
    return new Response(this.responses.shift())
  }

  async post(): Promise<Response> {
    return new Response(this.responses.shift())
  }
}
