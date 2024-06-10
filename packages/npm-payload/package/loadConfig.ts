// loadConfig.ts

import { createRequire } from 'module'

export const loadConfig = async (path: string) => {
  const require = createRequire(import.meta.url)
  // console.log("++++",path)
  // console.log("++++",require)

  const CLIENT_EXTENSIONS = [
    '.scss',
    '.css',
    '.svg',
    '.png',
    '.jpg',
    '.eot',
    '.ttf',
    '.woff',
    '.woff2',
  ]

  CLIENT_EXTENSIONS.forEach((ext) => {
    require.extensions[ext] = () => null
  })

  const config = require(path).default
  // console.log("++++111",config)
  return config
}