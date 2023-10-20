// @ts-check
import { createFlickr, FetchTransport } from "flickr-sdk"

// this example demonstrates how to configure the fetch transport's default
// request init. this is where you can specify headers, keepalive, etc.

const transport = new FetchTransport({
  headers: {
    "user-agent": "my-app/1.0",
  },
})

const { flickr } = createFlickr("<your api key>", transport)

const res = await flickr("flickr.photos.search", {
  text: "cat",
})
