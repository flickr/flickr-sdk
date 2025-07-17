// Core type testing utilities
export type Expect<T extends true> = T
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false
export type NotEqual<X, Y> = Equal<X, Y> extends true ? false : true
export type Extends<X, Y> = X extends Y ? true : false
export type NotExtends<X, Y> = Extends<X, Y> extends true ? false : true

// Utility types for common type checks
export type IsAny<T> = 0 extends 1 & T ? true : false
export type IsNever<T> = [T] extends [never] ? true : false
export type IsUnknown<T> =
  IsAny<T> extends true
    ? false
    : Equal<T, unknown> extends true
      ? true
      : false
export type IsFunction<T> = T extends (...args: any[]) => any 
  ? true 
  : T extends Function 
    ? true 
    : false
export type IsArray<T> = T extends readonly any[] ? true : false
export type IsObject<T> = T extends object
  ? T extends any[]
    ? false
    : T extends (...args: any[]) => any
      ? false
      : T extends Function
        ? false
        : true
  : false

// Advanced type checks
export type HasProperty<T, K extends PropertyKey> = K extends keyof T
  ? true
  : false
export type PropertyType<T, K extends keyof T> = T[K]
export type IsOptional<T, K extends keyof T> =
  {} extends Pick<T, K> ? true : false
export type IsReadonly<T, K extends keyof T> =
  Equal<{ -readonly [P in K]: T[P] }, { [P in K]: T[P] }> extends true
    ? false
    : true

// Function type utilities
export type GetParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never
export type GetReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any


// Advanced type utilities for complex scenarios
export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never
export type UnionToTuple<T> =
  UnionToIntersection<T extends any ? () => T : never> extends () => infer W
    ? [...UnionToTuple<Exclude<T, W>>, W]
    : []

// Conditional type utilities
export type IsConditional<T> = T extends any ? true : false
export type IsMappedType<T> = T extends { [K in keyof T]: T[K] } ? true : false



// Tuple and array utilities
export type IsTuple<T> = T extends readonly any[]
  ? number extends T["length"]
    ? false
    : true
  : false
export type TupleLength<T extends readonly any[]> = T["length"]
export type Head<T extends readonly any[]> = T extends readonly [
  infer H,
  ...any[],
]
  ? H
  : never
export type Tail<T extends readonly any[]> = T extends readonly [
  any,
  ...infer Rest,
]
  ? Rest
  : never

// String literal type utilities
export type IsStringLiteral<T> = T extends string
  ? string extends T
    ? false
    : true
  : false
export type IsNumberLiteral<T> = T extends number
  ? number extends T
    ? false
    : true
  : false

/**
 * Assertion functions for compile-time type checking
 * These functions will cause TypeScript compilation
 * errors if the type assertions fail
 */
const flinch = {
  /**
   * Assert that a type equals another type
   */
  equal<T, U>(this: Equal<T, U> extends true ? void : never): void {},

  /**
   * Assert that a type does not equal another type
   */
  notEqual<T, U>(this: NotEqual<T, U> extends true ? void : never): void {},

  /**
   * Assert that a type extends another type
   */
  extends<T, U>(this: Extends<T, U> extends true ? void : never): void {},

  /**
   * Assert that a type does not extend another type
   */
  notExtends<T, U>(this: NotExtends<T, U> extends true ? void : never): void {},

  /**
   * Assert that a type is any
   */
  isAny<T>(this: IsAny<T> extends true ? void : never): void {},

  /**
   * Assert that a type is never
   */
  isNever<T>(this: IsNever<T> extends true ? void : never): void {},

  /**
   * Assert that a type is unknown
   */
  isUnknown<T>(this: IsUnknown<T> extends true ? void : never): void {},

  /**
   * Assert that a type is a function
   */
  isFunction<T>(this: IsFunction<T> extends true ? void : never): void {},

  /**
   * Assert that a type is an array
   */
  isArray<T>(this: IsArray<T> extends true ? void : never): void {},

  /**
   * Assert that a type is an object (but not array)
   */
  isObject<T>(this: IsObject<T> extends true ? void : never): void {},

  /**
   * Assert that a type has a specific property
   */
  hasProperty<T, K extends PropertyKey>(this: HasProperty<T, K> extends true ? void : never): void {},

  /**
   * Assert that a property is optional
   */
  isOptional<T, K extends keyof T>(this: IsOptional<T, K> extends true ? void : never): void {},

  /**
   * Assert that a property is readonly
   */
  isReadonly<T, K extends keyof T>(this: IsReadonly<T, K> extends true ? void : never): void {},
}

/**
 * Compile-time type assertion that will cause TypeScript
 * errors if the condition is false
 * Usage: expectTrue<Equal<string, string>>() // OK
 *        expectTrue<Equal<string, number>>() // TypeScript error
 */
export function expectTrue<T extends true>(): void {
  // Compile-time only assertion
}

/**
 * Compile-time type assertion that will cause TypeScript
 * errors if the condition is true
 * Usage: expectFalse<Equal<string, number>>() // OK
 *        expectFalse<Equal<string, string>>() // TypeScript error
 */
export function expectFalse<T extends false>(): void {
  // Compile-time only assertion
}

/**
 * Advanced type assertion utilities
 */

/**
 * Assert that a type is a union type
 */
export function isUnion<T>(): IsUnion<T> extends true ? void : never {
  return undefined as IsUnion<T> extends true ? void : never
}

/**
 * Assert that a type is a tuple (fixed-length array)
 */
export function isTuple<T>(): IsTuple<T> extends true ? void : never {
  return undefined as IsTuple<T> extends true ? void : never
}

/**
 * Assert that a tuple has a specific length
 */
export function tupleLength<
  T extends readonly any[],
  N extends number,
>(): TupleLength<T> extends N ? void : never {
  return undefined as TupleLength<T> extends N ? void : never
}

/**
 * Assert that a type is a string literal
 */
export function isStringLiteral<T>(): IsStringLiteral<T> extends true
  ? void
  : never {
  return undefined as IsStringLiteral<T> extends true ? void : never
}

/**
 * Assert that a type is a number literal
 */
export function isNumberLiteral<T>(): IsNumberLiteral<T> extends true
  ? void
  : never {
  return undefined as IsNumberLiteral<T> extends true ? void : never
}



// Make flinch the default export
export default flinch
