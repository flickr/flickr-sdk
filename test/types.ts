/**
 * Flickr SDK Type Tests
 *
 * This file contains compile-time type assertions to verify the correctness
 * of the Flickr SDK type definitions using the Flinch type testing framework.
 */

import assert, { Equal, Extends, IsTuple, expectTrue } from "@flickr/flinch"
import type {
  API,
  Auth,
  Transport,
  Parser,
  GET,
  POST,
  Params,
  OAuthConfig,
  FlickrPeopleGetInfoParams,
  APIKeyAuthConfig,
  FlickrTestEchoParams,
} from "flickr-sdk"

// Auth Interface Tests
// Verify Auth interface structure
assert.hasProperty<Auth, "sign">()
assert.isFunction<Auth["sign"]>()

// Test the sign method parameters and return type
type SignMethod = Auth["sign"]
assert.isFunction<SignMethod>()

// The sign method should return a Promise<void>
type SignReturnType = ReturnType<SignMethod>
assert.extends<SignReturnType, Promise<void>>()

// Transport Interface Tests
// Should have get and post methods
assert.hasProperty<Transport, "get">()
assert.hasProperty<Transport, "post">()

assert.isFunction<Transport["get"]>()
assert.isFunction<Transport["post"]>()

// Should have correct method signatures
// Test get method
type GetMethod = Transport["get"]
type GetReturnType = ReturnType<GetMethod>
assert.extends<GetReturnType, Promise<Response>>()

// Test post method
type PostMethod = Transport["post"]
type PostReturnType = ReturnType<PostMethod>
assert.extends<PostReturnType, Promise<Response>>()

// Parser Interface Tests
// Should have parse method with correct signature
assert.hasProperty<Parser, "parse">()
assert.isFunction<Parser["parse"]>()

type ParseMethod = Parser["parse"]
type ParseReturnType = ReturnType<ParseMethod>
assert.extends<ParseReturnType, Promise<any>>()

// Parameter Types Tests
// Should verify GET and POST extend Params
assert.extends<GET, Params>()
assert.extends<POST, Params>()

// Integration Type Tests
// Test that implementations would satisfy the interfaces
interface MockAuth extends Auth {}
interface MockTransport extends Transport {}
interface MockParser extends Parser {}

assert.extends<MockAuth, Auth>()
assert.extends<MockTransport, Transport>()
assert.extends<MockParser, Parser>()

// API Tests
// Should have flickr.people.getInfo
assert.hasProperty<API, "flickr.people.getInfo">()

expectTrue<IsTuple<API["flickr.people.getInfo"]>>()
expectTrue<Equal<API["flickr.people.getInfo"][0], FlickrPeopleGetInfoParams>>()

// Should have flickr.test.echo
assert.hasProperty<API, "flickr.test.echo">()

expectTrue<IsTuple<API["flickr.test.echo"]>>()
expectTrue<Equal<API["flickr.test.echo"][0], FlickrTestEchoParams>>()

// APIKeyConfig Tests
// Should accept a string
expectTrue<Extends<string, APIKeyAuthConfig>>()
expectTrue<Extends<() => string, APIKeyAuthConfig>>()
expectTrue<Extends<() => Promise<string>, APIKeyAuthConfig>>()

// OAuthConfig Tests
// Should accept consumer key/secret and oauth token/secret
expectTrue<
  Extends<
    {
      consumerKey: string
      consumerSecret: string
      oauthToken: string
      oauthTokenSecret: string
    },
    OAuthConfig
  >
>()

// Should allow false for oauth token/secret
expectTrue<
  Extends<
    {
      consumerKey: string
      consumerSecret: string
      oauthToken: false
      oauthTokenSecret: false
    },
    OAuthConfig
  >
>()
