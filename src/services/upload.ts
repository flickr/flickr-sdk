import type { Auth, Transport } from "../types"
import { POST } from "../params"
import { readFile } from "../shims/fs-promises"
import { XMLParser } from "../parser/xml"

export interface UploadParams {
  /**
   * The title of the photo.
   */
  title?: string
  /**
   * A description of the photo. May contain some limited HTML.
   */
  description?: string
  /**
   * A space-seperated list of tags to apply to the photo.
   */
  tags?: string
  /**'
   * Set to 0 for no, 1 for yes. Specifies who can view the photo.
   * If omitted (or set to 9) permissions will be set to user's default
   */
  is_public?: "0" | "1" | "9"
  /**'
   * Set to 0 for no, 1 for yes. Specifies who can view the photo.
   * If omitted (or set to 9) permissions will be set to user's default
   */
  is_friend?: "0" | "1" | "9"
  /**'
   * Set to 0 for no, 1 for yes. Specifies who can view the photo.
   * If omitted (or set to 9) permissions will be set to user's default
   */
  is_family?: "0" | "1" | "9"
  /**
   * Set to 1 for Safe, 2 for Moderate, or 3 for Restricted.
   * If omitted or an invalid value is passed, will be set to user's default
   */
  safety_level?: "1" | "2" | "3"
  /**
   * Set to 1 for Photo, 2 for Screenshot, or 3 for Other.
   * If omitted (or set to 9), will be set to user's default
   */
  content_type?: "1" | "2" | "3" | "9"
  /**
   * Set to 1 to keep the photo in global search results, 2 to hide from
   * public searches. If omitted, will be set based to user's default
   */
  hidden?: "1" | "2"
}

export interface UploadFail {
  stat: "fail"
  err: {
    code: number
    msg: string
  }
}

export interface UploadOK {
  stat: "ok"
  photoid: {
    secret: string
    originalsecret: string
    _content: string
  }
}

export type UploadResponse = UploadFail | UploadOK

export interface Upload {
  (
    file: string | File,
    params: UploadParams,
  ): Promise<{
    id: string
    secret: string
    originalsecret: string
  }>
}

export class UploadService {
  constructor(
    private transport: Transport,
    private auth: Auth,
  ) {}

  async upload(
    file: string | File,
    params: Record<string, string> = {},
  ): ReturnType<Upload> {
    const req = new Request("https://up.flickr.com/services/upload", {
      method: "POST",
    })

    const payload = new POST()

    // upload params
    for (const [key, value] of Object.entries(params)) {
      payload.set(key, value)
    }

    // sign the transaction before adding the photo
    await this.auth.sign(req, payload)

    // ok now add the photo
    payload.set("photo", await this.getBlob(file))

    const res = await this.transport.post(req.url, payload)

    const parser = new XMLParser()

    const rsp: UploadResponse = await parser.parse(res)

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
    if (typeof window === "undefined" && typeof file === "string") {
      return new File([await readFile(file)], file)
    } else {
      return file
    }
  }
}
