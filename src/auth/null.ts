import type { Auth } from "../types"

export class NullAuth implements Auth {
  async sign(): Promise<void> {}
}
