
export { render }
export { passToClient }

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { PageShell } from './PageShell'
import type { PageContextServer } from './types'

const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vite-plugin-ssr.com/head
  const title = getTitle(pageContext)
  const desc = getDescription(pageContext)

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

function getTitle(pageContext: PageContextServer) {
  const title = 
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title ||
    // For dynamic titles (defined in the `export { documentProps }` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title ||
    'Maya AI Agent Hub'
  return title
}

function getDescription(pageContext: PageContextServer) {
  const description = 
    (pageContext.exports.documentProps || {}).description ||
    (pageContext.documentProps || {}).description ||
    'AI-powered business tools for productivity and automation'
  return description
}
