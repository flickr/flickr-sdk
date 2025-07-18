/**
 * Flinch Self-Test Suite
 *
 * This file contains compile-time type assertions to validate that Flinch's
 * type testing utilities work correctly. These tests verify the framework
 * by testing its own type system.
 */

import flinch, {
  expectTrue,
  expectFalse,
  type Equal,
  type NotEqual,
  type Extends,
  type NotExtends,
  type IsAny,
  type IsNever,
  type IsUnknown,
  type IsFunction,
  type IsArray,
  type IsObject,
  type HasProperty,
  type IsOptional,
  type IsReadonly,
  type IsUnion,
  type IsTuple,
  type TupleLength,
  type Head,
  type Tail,
  type IsStringLiteral,
  type IsNumberLiteral,
  type GetParameters,
  type GetReturnType,
  isStringLiteral,
  isUnion,
  isTuple,
  tupleLength,
  isNumberLiteral,
} from "./index"

// Core Type Utilities Tests

// Equal type utility validation
// Test Equal with identical types
expectTrue<Equal<string, string>>()
expectTrue<Equal<number, number>>()
expectTrue<Equal<{ a: string }, { a: string }>>()

// Test Equal with different types
expectFalse<Equal<string, number>>()
expectFalse<Equal<{ a: string }, { a: number }>>()
expectFalse<Equal<string[], number[]>>()

// Test Equal with complex types
type ComplexType1 = { a: string; b: number; c?: boolean }
type ComplexType2 = { a: string; b: number; c?: boolean }
type ComplexType3 = { a: string; b: number; c: boolean }

expectTrue<Equal<ComplexType1, ComplexType2>>()
expectFalse<Equal<ComplexType1, ComplexType3>>()

// NotEqual type utility validation
expectTrue<NotEqual<string, number>>()
expectTrue<NotEqual<boolean, string>>()
expectFalse<NotEqual<string, string>>()
expectFalse<NotEqual<number, number>>()

// Extends type utility validation
expectTrue<Extends<string, string | number>>()
expectTrue<Extends<"hello", string>>()
expectTrue<Extends<never, string>>()
expectTrue<Extends<{ a: string; b: number }, { a: string }>>()

expectFalse<Extends<number, string>>()
expectFalse<Extends<string, "hello">>()
expectFalse<Extends<{ a: string }, { a: string; b: number }>>()

// NotExtends type utility validation
expectTrue<NotExtends<string | number, string>>()
expectTrue<NotExtends<string, "hello">>()
expectFalse<NotExtends<string, string | number>>()
expectFalse<NotExtends<"hello", string>>()

// Special Type Detection Tests

// IsAny type utility validation
expectTrue<IsAny<any>>()
expectFalse<IsAny<string>>()
expectFalse<IsAny<unknown>>()
expectFalse<IsAny<never>>()
expectFalse<IsAny<{}>>()

// IsNever type utility validation
expectTrue<IsNever<never>>()
expectFalse<IsNever<string>>()
expectFalse<IsNever<any>>()
expectFalse<IsNever<unknown>>()
expectFalse<IsNever<void>>()

// Test with conditional types that resolve to never
type NeverType = string & number
expectTrue<IsNever<NeverType>>()

// IsUnknown type utility validation
expectTrue<IsUnknown<unknown>>()
expectFalse<IsUnknown<string>>()
expectFalse<IsUnknown<any>>()
expectFalse<IsUnknown<never>>()
expectFalse<IsUnknown<{}>>()

// Structural Type Detection Tests

// IsFunction type utility validation
expectTrue<IsFunction<() => void>>()
expectTrue<IsFunction<(x: string) => number>>()
expectTrue<IsFunction<(...args: any[]) => any>>()
expectTrue<IsFunction<Function>>()

expectFalse<IsFunction<string>>()
expectFalse<IsFunction<number>>()
expectFalse<IsFunction<{}>>()
expectFalse<IsFunction<string[]>>()

// IsArray type utility validation
expectTrue<IsArray<string[]>>()
expectTrue<IsArray<number[]>>()
expectTrue<IsArray<readonly string[]>>()
expectTrue<IsArray<[string, number]>>()
expectTrue<IsArray<Array<any>>>()

expectFalse<IsArray<string>>()
expectFalse<IsArray<number>>()
expectFalse<IsArray<{}>>()
expectFalse<IsArray<{ length: number }>>()

// IsObject type utility validation
expectTrue<IsObject<{ a: string }>>()
expectTrue<IsObject<Record<string, any>>>()
expectTrue<IsObject<{}>>()
expectTrue<IsObject<object>>()

expectFalse<IsObject<string>>()
expectFalse<IsObject<number>>()
expectFalse<IsObject<string[]>>()
expectFalse<IsObject<Function>>()
expectFalse<IsObject<null>>()
expectFalse<IsObject<undefined>>()

// Property Analysis Tests

interface TestInterface {
  required: string
  optional?: number
  readonly readonlyProp: boolean
  normalProp: string
}

// HasProperty type utility validation
expectTrue<HasProperty<TestInterface, "required">>()
expectTrue<HasProperty<TestInterface, "optional">>()
expectTrue<HasProperty<TestInterface, "readonlyProp">>()
expectTrue<HasProperty<TestInterface, "normalProp">>()

expectFalse<HasProperty<TestInterface, "nonexistent">>()
expectFalse<HasProperty<TestInterface, "missing">>()

// IsOptional type utility validation
expectTrue<IsOptional<TestInterface, "optional">>()
expectFalse<IsOptional<TestInterface, "required">>()
expectFalse<IsOptional<TestInterface, "readonlyProp">>()
expectFalse<IsOptional<TestInterface, "normalProp">>()

// IsReadonly type utility validation
expectTrue<IsReadonly<TestInterface, "readonlyProp">>()
expectFalse<IsReadonly<TestInterface, "required">>()
expectFalse<IsReadonly<TestInterface, "optional">>()
expectFalse<IsReadonly<TestInterface, "normalProp">>()

// Function Type Utilities Tests

type TestFunction = (a: string, b: number, c?: boolean) => Promise<string>
type VoidFunction = () => void

// GetParameters type utility validation
expectTrue<Equal<GetParameters<TestFunction>, [string, number, boolean?]>>()
expectTrue<Equal<GetParameters<VoidFunction>, []>>()

// Test with built-in function types
expectTrue<Equal<GetParameters<typeof parseInt>, [string, number?]>>()

// GetReturnType type utility validation
expectTrue<Equal<GetReturnType<TestFunction>, Promise<string>>>()
expectTrue<Equal<GetReturnType<VoidFunction>, void>>()
expectTrue<Equal<GetReturnType<() => number>, number>>()

// Advanced Type Utilities Tests

// IsUnion type utility validation
expectTrue<IsUnion<string | number>>()
expectTrue<IsUnion<"a" | "b" | "c">>()
expectTrue<IsUnion<boolean>>() // boolean is true | false

expectFalse<IsUnion<string>>()
expectFalse<IsUnion<number>>()
expectFalse<IsUnion<{}>>()

// IsTuple type utility validation
expectTrue<IsTuple<[string, number]>>()
expectTrue<IsTuple<[string, number, boolean]>>()
expectTrue<IsTuple<[]>>()
expectTrue<IsTuple<readonly [string, number]>>()

expectFalse<IsTuple<string[]>>()
expectFalse<IsTuple<number[]>>()
expectFalse<IsTuple<Array<string>>>()

// TupleLength type utility validation
expectTrue<Equal<TupleLength<[string, number]>, 2>>()
expectTrue<Equal<TupleLength<[string, number, boolean]>, 3>>()
expectTrue<Equal<TupleLength<[]>, 0>>()
expectTrue<Equal<TupleLength<[string]>, 1>>()

// Head and Tail type utilities validation
type TestTuple = [string, number, boolean]

expectTrue<Equal<Head<TestTuple>, string>>()
expectTrue<Equal<Tail<TestTuple>, [number, boolean]>>()
expectTrue<Equal<Head<[number]>, number>>()
expectTrue<Equal<Tail<[number]>, []>>()

// Literal type utilities validation
expectTrue<IsStringLiteral<"hello">>()
expectTrue<IsStringLiteral<"world">>()
expectFalse<IsStringLiteral<string>>()

expectTrue<IsNumberLiteral<42>>()
expectTrue<IsNumberLiteral<0>>()
expectTrue<IsNumberLiteral<-1>>()
expectFalse<IsNumberLiteral<number>>()

// Type Assertion Functions Tests

// Flinch functions validation - these should compile without errors if the type assertions are correct
flinch.equal<string, string>()
flinch.notEqual<string, number>()
flinch.extends<string, string | number>()
flinch.notExtends<string | number, string>()

flinch.isFunction<() => void>()
flinch.isArray<string[]>()
flinch.isObject<{ a: string }>()

interface TestType {
  prop: string
  optional?: number
  readonly readonlyProp: boolean
}

flinch.hasProperty<TestType, "prop">()
flinch.isOptional<TestType, "optional">()
flinch.isReadonly<TestType, "readonlyProp">()

// Complex Type Scenarios Tests

// Deeply nested generic types
interface ApiResponse<T> {
  data: T
  meta: {
    status: number
    message?: string
  }
}

interface User {
  id: number
  profile: {
    name: string
    settings: {
      theme: "light" | "dark"
      notifications: boolean
    }
  }
}

type UserApiResponse = ApiResponse<User>

// Test nested property access
flinch.hasProperty<UserApiResponse, "data">()
flinch.hasProperty<UserApiResponse, "meta">()
flinch.hasProperty<UserApiResponse["data"], "id">()
flinch.hasProperty<UserApiResponse["data"], "profile">()
flinch.hasProperty<UserApiResponse["data"]["profile"], "name">()
flinch.hasProperty<UserApiResponse["data"]["profile"], "settings">()

// Test deep type equality
flinch.equal<
  UserApiResponse["data"]["profile"]["settings"]["theme"],
  "light" | "dark"
>()
flinch.equal<UserApiResponse["meta"]["status"], number>()

// Test optional properties at different levels
flinch.isOptional<UserApiResponse["meta"], "message">()

// Conditional and mapped types
// Conditional type
type NonNullable<T> = T extends null | undefined ? never : T

flinch.equal<NonNullable<string>, string>()
flinch.equal<NonNullable<string | null>, string>()
flinch.isNever<NonNullable<null>>()

// Mapped type
type Partial<T> = {
  [P in keyof T]?: T[P]
}

interface Original {
  a: string
  b: number
}

type PartialOriginal = Partial<Original>

flinch.isOptional<PartialOriginal, "a">()
flinch.isOptional<PartialOriginal, "b">()
flinch.equal<PartialOriginal["a"], string | undefined>()

// Template literal types
type EventName<T extends string> = `on${Capitalize<T>}`
type ClickEvent = EventName<"click">
type HoverEvent = EventName<"hover">

flinch.equal<ClickEvent, "onClick">()
flinch.equal<HoverEvent, "onHover">()

// Test that these are string literals
isStringLiteral<ClickEvent>()
isStringLiteral<HoverEvent>()

// Edge Cases and Error Conditions Tests

// Empty types handling
type EmptyObject = {}
type EmptyTuple = []
type EmptyUnion = never

flinch.isObject<EmptyObject>()
isTuple<EmptyTuple>()
tupleLength<EmptyTuple, 0>()
flinch.isNever<EmptyUnion>()

// Recursive types handling
interface TreeNode {
  value: string
  children?: TreeNode[]
}

flinch.hasProperty<TreeNode, "value">()
flinch.hasProperty<TreeNode, "children">()
flinch.isOptional<TreeNode, "children">()

// Test that children is an array of TreeNode
type ChildrenType = NonNullable<TreeNode["children"]>
flinch.isArray<ChildrenType>()

// Intersection types handling
interface A {
  a: string
}

interface B {
  b: number
}

type AB = A & B

flinch.hasProperty<AB, "a">()
flinch.hasProperty<AB, "b">()
flinch.equal<AB["a"], string>()
flinch.equal<AB["b"], number>()

// Test that AB extends both A and B
flinch.extends<AB, A>()
flinch.extends<AB, B>()

// Flinch Method Failure Tests
// These tests verify that flinch methods properly fail with invalid types

interface TestInterface {
  existingProp: string
  optionalProp?: number
  readonly readonlyProp: boolean
}

// These should all cause TypeScript compilation errors:

// @ts-expect-error - string does not equal number
flinch.equal<string, number>()

// @ts-expect-error - string equals string
flinch.notEqual<string, string>()

// @ts-expect-error - string does not extend number
flinch.extends<string, number>()

// @ts-expect-error - string extends string | number
flinch.notExtends<string, string | number>()

// @ts-expect-error - string is not any
flinch.isAny<string>()

// @ts-expect-error - string is not never
flinch.isNever<string>()

// @ts-expect-error - string is not unknown
flinch.isUnknown<string>()

// @ts-expect-error - string is not a function
flinch.isFunction<string>()

// @ts-expect-error - string is not an array
flinch.isArray<string>()

// @ts-expect-error - string is not an object
flinch.isObject<string>()

// @ts-expect-error - arrays are not objects in our definition
flinch.isObject<string[]>()

// @ts-expect-error - functions are not objects in our definition
flinch.isObject<() => void>()

// @ts-expect-error - property doesn't exist
flinch.hasProperty<TestInterface, "nonExistentProp">()

// @ts-expect-error - existingProp is required, not optional
flinch.isOptional<TestInterface, "existingProp">()

// @ts-expect-error - existingProp is not readonly
flinch.isReadonly<TestInterface, "existingProp">()

// @ts-expect-error - false is not true
expectTrue<false>()

// @ts-expect-error - true is not false
expectFalse<true>()

// Flinch API Validation Tests
// Test that Flinch can validate its own API

// Validate flinch API structure
flinch.isObject<typeof flinch>()
flinch.hasProperty<typeof flinch, "equal">()
flinch.hasProperty<typeof flinch, "notEqual">()
flinch.hasProperty<typeof flinch, "extends">()
flinch.hasProperty<typeof flinch, "notExtends">()
flinch.hasProperty<typeof flinch, "isAny">()
flinch.hasProperty<typeof flinch, "isNever">()
flinch.hasProperty<typeof flinch, "isUnknown">()
flinch.hasProperty<typeof flinch, "isFunction">()
flinch.hasProperty<typeof flinch, "isArray">()
flinch.hasProperty<typeof flinch, "isObject">()
flinch.hasProperty<typeof flinch, "hasProperty">()
flinch.hasProperty<typeof flinch, "isOptional">()
flinch.hasProperty<typeof flinch, "isReadonly">()

// All methods should be functions
flinch.isFunction<typeof flinch.equal>()
flinch.isFunction<typeof flinch.notEqual>()
flinch.isFunction<typeof flinch.extends>()
flinch.isFunction<typeof flinch.notExtends>()

// Validate advanced type assertions
flinch.isFunction<typeof isUnion>()
flinch.isFunction<typeof isTuple>()
flinch.isFunction<typeof tupleLength>()
flinch.isFunction<typeof isStringLiteral>()
flinch.isFunction<typeof isNumberLiteral>()
