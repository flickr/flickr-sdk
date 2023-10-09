export interface Params {
  set(key: string, value: string): void
  entries(): IterableIterator<[string, string]>
}

export class GET implements Params {
  private searchParams = new URLSearchParams()

  set(key: string, value: string) {
    this.searchParams.set(key, value)
  }

  *entries(): IterableIterator<[string, string]> {
    for (const [key, value] of this.searchParams.entries()) {
      yield [key, value]
    }
  }
}

export class POST implements Params {
  private formData = new FormData()

  set(key: string, value: string | Blob) {
    this.formData.set(key, value)
  }

  getFormData() {
    return this.formData
  }

  *entries(): IterableIterator<[string, string]> {
    for (const [key, value] of this.formData.entries()) {
      yield [key, value.toString()]
    }
  }
}
