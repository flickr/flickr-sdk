declare module "min-qs" {
  export function parse(
    str: string,
    sep?: string,
    eq?: string,
  ): Record<string, string>
  export function stringify(obj: Record<string, string>): string
}
