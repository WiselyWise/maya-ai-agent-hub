
export { render }

import ReactDOM from 'react-dom/client'
import React from 'react'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  const root = ReactDOM.createRoot(document.getElementById('root')!)
  root.render(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
}
