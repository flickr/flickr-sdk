declare module "min-url" {
  export function parse<T extends boolean>(
    url: string,
    parseQuery?: T,
  ): T extends true
    ? {
        query: Record<string, string>
      }
    : {
        query: string
      }

  export function format(parts: Record<string, string>): string
}
