import type { GET, POST, Params } from "./params"

export interface Auth {
  sign(req: Request, params: Params): Promise<void>
}

export interface Transport {
  get(url: string, params: GET): Promise<Response>
  post(url: string, params: POST): Promise<Response>
}

export interface Parser {
  parse(res: Response): Promise<any>
}
