
export type PageContext = {
  Page: (pageProps: any) => React.ReactElement
  pageProps: any
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}

export type PageContextServer = PageContext & {
  documentProps?: {
    title?: string
    description?: string
  }
}

export type PageContextClient = PageContext & {
  isHydration: boolean
}
