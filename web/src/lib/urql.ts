import {
  createClient,
  ssrExchange,
  dedupExchange,
  fetchExchange,
  cacheExchange,
} from "urql"

const isServerSide = typeof window === "undefined"
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: "https://api-sa-east-1.hygraph.com/v2/clb6xwxf90dgy01uk0oln7w2z/master",
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache }
