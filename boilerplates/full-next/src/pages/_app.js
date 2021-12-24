import { ThemeProvider } from '@emotion/react'

import theme from '../styles/themes'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
