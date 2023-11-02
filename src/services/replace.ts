import type { Auth, Transport } from "../types"
import { POST } from "../params"
import { readFile } from "../shims/fs-promises"
import { XMLParser } from "../parser/xml"

export interface ReplaceFail {
  stat: "fail"
  err: {
    code: number
    msg: string
  }
}

export interface ReplaceOK {
  stat: "ok"
  photoid: {
    secret: string
    originalsecret: string
    _content: string
  }
}

export type ReplaceResponse = ReplaceFail | ReplaceOK

export interface Replace {
  (
    id: string,
    file: string | File,
  ): Promise<{
    id: string
    secret: string
    originalsecret: string
  }>
}

export class ReplaceService {
  constructor(
    private transport: Transport,
    private auth: Auth,
  ) {}

  async replace(id: string, file: string | File): ReturnType<Replace> {
    const url = "https://up.flickr.com/services/replace"

    const payload = new POST()

    // the photo to replace
    payload.set("photo_id", id)

    // sign the transaction before adding the photo
    await this.auth.sign("POST", url, payload)

    // ok now add the photo
    payload.set("photo", await this.getBlob(file))

    const res = await this.transport.post(url, payload)

    const parser = new XMLParser()

    const rsp: ReplaceResponse = await parser.parse(res)

    if (rsp.stat !== "ok") {
      // @ts-expect-error
      throw new Error(rsp.err.msg, {
        cause: res,
      })
    }

    return {
      id: rsp.photoid._content,
      secret: rsp.photoid.secret,
      originalsecret: rsp.photoid.originalsecret,
    }
  }

  async getBlob(file: string | File) {
    if (typeof file === "string") {
      return new File([await readFile(file)], file)
    } else {
      return file
    }
  }
}
