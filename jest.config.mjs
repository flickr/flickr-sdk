/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
}

export default config
