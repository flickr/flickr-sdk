# flinch 🎯

> almost certainly the best typescript type testing library in the world.

flinch is a zero-dependency typescript library for compile-time type testing. it provides utilities to assert type relationships, detect type properties, and validate complex type scenarios at compile time.

## table of contents 📚

- [installation](#installation)
- [quick start](#quick-start)
- [flinch object methods](#flinch-object-methods)
- [core type utilities](#core-type-utilities)
- [type detection utilities](#type-detection-utilities)
- [property analysis utilities](#property-analysis-utilities)
- [function type utilities](#function-type-utilities)
- [advanced type utilities](#advanced-type-utilities)
- [tuple and array utilities](#tuple-and-array-utilities)
- [literal type utilities](#literal-type-utilities)
- [assertion functions](#assertion-functions)
- [examples](#examples)
- [license](#license)

## installation

```bash
npm install @flickr/flinch
```

## quick start

```typescript
import flinch, { expectTrue, expectFalse, Equal, Extends } from '@flickr/flinch'

// these will compile successfully
expectTrue<Equal<string, string>>()
expectTrue<Extends<'hello', string>>()
expectFalse<Equal<string, number>>()

// these will cause typescript compilation errors
expectTrue<Equal<string, number>>() // ❌ compilation error
expectFalse<Equal<string, string>>() // ❌ compilation error

// these will compile successfully
flinch.equal<string, string>() // ✅ passes
flinch.extends<'hello', string>() // ✅ passes

// these will cause typescript compilation errors
flinch.equal<string, number>() // ❌ compilation error
```
## flinch object methods

the main interface of `flinch` exposes assertion methods for convenient testing (causes compilation errors on fail).

```typescript
import assert from '@flickr/flinch'

assert.equal<string, string>()
assert.notEqual<string, number>()
assert.extends<'hello', string>()
assert.notExtends<string, number>()
assert.isAny<any>()
assert.isNever<never>()
assert.isUnknown<unknown>()
assert.isFunction<()
assert.isArray<string[]>()
assert.isObject<{ a: string }>()
assert.hasProperty<{ a: string }, 'a'>()
assert.isOptional<{ a?: string }, 'a'>()
assert.isReadonly<{ readonly a: string }, 'a'>()
```

## core type utilities

### `Equal<X, Y>`
tests if two types are exactly equal.

```typescript
type Test1 = Equal<string, string> // true
type Test2 = Equal<string, number> // false
```

### `NotEqual<X, Y>`
tests if two types are not equal.

```typescript
type Test1 = NotEqual<string, number> // true
type Test2 = NotEqual<string, string> // false
```

### `Extends<X, Y>`
tests if type X extends type Y.

```typescript
type Test1 = Extends<'hello', string> // true
type Test2 = Extends<string, 'hello'> // false
```

### `NotExtends<X, Y>`
tests if type X does not extend type Y.

```typescript
type Test1 = NotExtends<string, 'hello'> // true
type Test2 = NotExtends<'hello', string> // false
```

## type detection utilities

### `IsAny<T>`
detects if a type is `any`.

```typescript
type Test1 = IsAny<any> // true
type Test2 = IsAny<string> // false
```

### `IsNever<T>`
detects if a type is `never`.

```typescript
type Test1 = IsNever<never> // true
type Test2 = IsNever<string> // false
```

### `IsUnknown<T>`
detects if a type is `unknown`.

```typescript
type Test1 = IsUnknown<unknown> // true
type Test2 = IsUnknown<any> // false
```

### `IsFunction<T>`
detects if a type is a function.

```typescript
type Test1 = IsFunction<() => void> // true
type Test2 = IsFunction<string> // false
```

### `IsArray<T>`
detects if a type is an array.

```typescript
type Test1 = IsArray<string[]> // true
type Test2 = IsArray<string> // false
```

### `IsObject<T>`
detects if a type is an object (excluding arrays and functions).

```typescript
type Test1 = IsObject<{ a: string }> // true
type Test2 = IsObject<string[]> // false
```

## property analysis utilities

### `HasProperty<T, K>`
checks if a type has a specific property.

```typescript
interface User { name: string; age?: number }
type Test1 = HasProperty<User, 'name'> // true
type Test2 = HasProperty<User, 'email'> // false
```

### `IsOptional<T, K>`
checks if a property is optional.

```typescript
interface User { name: string; age?: number }
type Test1 = IsOptional<User, 'age'> // true
type Test2 = IsOptional<User, 'name'> // false
```

### `IsReadonly<T, K>`
checks if a property is readonly.

```typescript
interface User { name: string; readonly id: number }
type Test1 = IsReadonly<User, 'id'> // true
type Test2 = IsReadonly<User, 'name'> // false
```

## function type utilities

### `GetParameters<T>`
extracts parameter types from a function type.

```typescript
type Fn = (a: string, b: number) => void
type Params = GetParameters<Fn> // [string, number]
```

### `GetReturnType<T>`
extracts the return type from a function type.

```typescript
type Fn = (a: string) => number
type Return = GetReturnType<Fn> // number
```

## advanced type utilities

### `IsUnion<T>`
detects if a type is a union type.

```typescript
type Test1 = IsUnion<string | number> // true
type Test2 = IsUnion<string> // false
```

### `UnionToIntersection<U>`
converts a union type to an intersection type.

```typescript
type Union = { a: string } | { b: number }
type Intersection = UnionToIntersection<Union> // { a: string } & { b: number }
```

## tuple and array utilities

### `IsTuple<T>`
detects if a type is a tuple (fixed-length array).

```typescript
type Test1 = IsTuple<[string, number]> // true
type Test2 = IsTuple<string[]> // false
```

### `TupleLength<T>`
gets the length of a tuple type.

```typescript
type Length = TupleLength<[string, number, boolean]> // 3
```

### `Head<T>`
gets the first element type of a tuple.

```typescript
type First = Head<[string, number, boolean]> // string
```

### `Tail<T>`
gets all elements except the first from a tuple.

```typescript
type Rest = Tail<[string, number, boolean]> // [number, boolean]
```

## literal type utilities

### `IsStringLiteral<T>`
detects if a type is a string literal.

```typescript
type Test1 = IsStringLiteral<'hello'> // true
type Test2 = IsStringLiteral<string> // false
```

### `IsNumberLiteral<T>`
detects if a type is a number literal.

```typescript
type Test1 = IsNumberLiteral<42> // true
type Test2 = IsNumberLiteral<number> // false
```

## assertion functions

flinch provides both type-level utilities and runtime assertion functions:

### `expectTrue<T>()`
asserts that a type condition is true (causes compilation error if false).

```typescript
expectTrue<Equal<string, string>>() // ✅ compiles
expectTrue<Equal<string, number>>() // ❌ compilation error
```

### `expectFalse<T>()`
asserts that a type condition is false (causes compilation error if true).

```typescript
expectFalse<Equal<string, number>>() // ✅ compiles
expectFalse<Equal<string, string>>() // ❌ compilation error
```

## examples

### testing api response types

```typescript
import { expectTrue, Equal, HasProperty, IsOptional } from '@flickr/flinch'

interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

interface User {
  id: number
  name: string
  email?: string
}

type UserResponse = ApiResponse<User>

// test the structure
expectTrue<HasProperty<UserResponse, 'data'>>()
expectTrue<HasProperty<UserResponse, 'status'>>()
expectTrue<IsOptional<UserResponse, 'message'>>()

// test nested properties
expectTrue<HasProperty<UserResponse['data'], 'id'>>()
expectTrue<HasProperty<UserResponse['data'], 'name'>>()
expectTrue<IsOptional<UserResponse['data'], 'email'>>()
```

### testing utility types

```typescript
import { expectTrue, Equal, IsUnion, IsTuple } from '@flickr/flinch'

// test conditional types
type NonNullable<T> = T extends null | undefined ? never : T

expectTrue<Equal<NonNullable<string>, string>>()
expectTrue<Equal<NonNullable<string | null>, string>>()

// test mapped types
type Partial<T> = { [P in keyof T]?: T[P] }

interface Original { a: string; b: number }
type PartialOriginal = Partial<Original>

expectTrue<IsOptional<PartialOriginal, 'a'>>()
expectTrue<IsOptional<PartialOriginal, 'b'>>()
```

### testing failure cases

use `@ts-expect-error` to tell typescript to expect a compilation error.
if an error is not produced, typescript will complain.

```typescript
import assert from '@flickr/flinch'

assert.extends<string, number>() // ❌ compilation error

// @ts-expect-error - string is not number
assert.extends<string, number>() // ✅ compiles
```

## license 📄

MIT © SmugMug, Inc
