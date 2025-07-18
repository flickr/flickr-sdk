import { Transport } from "../types"

export class MockTransport implements Transport {
  private responses: any[] = []

  constructor(response?: any) {
    if (response) {
      this.addMock(response)
    }
  }

  reset():void {
    this.responses = []
  }

  addMock(response: any): void {
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
