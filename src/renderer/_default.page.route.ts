
import { resolveRoute } from 'vite-plugin-ssr/routing'

export { route }

// We use a Route Function
function route(pageContext: { urlPathname: string }) {
  if (pageContext.urlPathname === '/') {
    return { match: '/index' }
  }
  if (pageContext.urlPathname === '/contract-scanner') {
    return { match: '/contract-scanner' }
  }
  if (pageContext.urlPathname === '/presentation-generator') {
    return { match: '/presentation-generator' }
  }
  if (pageContext.urlPathname === '/viral-post-generator') {
    return { match: '/viral-post-generator' }
  }
  if (pageContext.urlPathname === '/prompt-genius') {
    return { match: '/prompt-genius' }
  }
  if (pageContext.urlPathname === '/meme-generator') {
    return { match: '/meme-generator' }
  }
  if (pageContext.urlPathname === '/smart-reply') {
    return { match: '/smart-reply' }
  }
  if (pageContext.urlPathname === '/lead-genie') {
    return { match: '/lead-genie' }
  }
  if (pageContext.urlPathname === '/document-genie') {
    return { match: '/document-genie' }
  }
  
  return false
}
