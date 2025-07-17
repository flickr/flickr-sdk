import { describe, it } from "node:test"
import flinch from "flinch"
import type { Auth, Transport, Parser } from "../src/types"
import type { GET, POST, Params } from "../src/params"

describe("flickr-sdk type tests", () => {
  describe("Auth Interface", () => {
    it("should have correct method signature", () => {
      // Verify Auth interface structure
      flinch.hasProperty<Auth, "sign">()
      flinch.isFunction<Auth["sign"]>()

      // Test the sign method parameters and return type
      type SignMethod = Auth["sign"]
      flinch.isFunction<SignMethod>()

      // The sign method should return a Promise<void>
      type SignReturnType = ReturnType<SignMethod>
      flinch.extends<SignReturnType, Promise<void>>()
    })
  })

  describe("Transport Interface", () => {
    it("should have get and post methods", () => {
      flinch.hasProperty<Transport, "get">()
      flinch.hasProperty<Transport, "post">()

      flinch.isFunction<Transport["get"]>()
      flinch.isFunction<Transport["post"]>()
    })

    it("should have correct method signatures", () => {
      // Test get method
      type GetMethod = Transport["get"]
      type GetReturnType = ReturnType<GetMethod>
      flinch.extends<GetReturnType, Promise<Response>>()

      // Test post method
      type PostMethod = Transport["post"]
      type PostReturnType = ReturnType<PostMethod>
      flinch.extends<PostReturnType, Promise<Response>>()
    })
  })

  describe("Parser Interface", () => {
    it("should have parse method with correct signature", () => {
      flinch.hasProperty<Parser, "parse">()
      flinch.isFunction<Parser["parse"]>()

      type ParseMethod = Parser["parse"]
      type ParseReturnType = ReturnType<ParseMethod>
      flinch.extends<ParseReturnType, Promise<any>>()
    })
  })

  describe("Parameter Types", () => {
    it("should verify GET and POST extend Params", () => {
      flinch.extends<GET, Params>()
      flinch.extends<POST, Params>()
    })
  })

  describe("Integration Type Tests", () => {
    it("should verify interface compatibility", () => {
      // Test that implementations would satisfy the interfaces
      interface MockAuth extends Auth {}
      interface MockTransport extends Transport {}
      interface MockParser extends Parser {}

      flinch.extends<MockAuth, Auth>()
      flinch.extends<MockTransport, Transport>()
      flinch.extends<MockParser, Parser>()
    })
  })
})
