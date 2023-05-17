import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import { GlobalStyles, lightTheme } from '../styles/theme.config'
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import { store } from '../store'
import { appWithTranslation } from 'next-i18next'
import { SSRProvider } from '@react-aria/ssr'
import Router from 'next/router'
import { useState } from 'react'
import LoadingPage from '/src/components/EcoLoading/LoadingPage'
import Layout from '/src/components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', () => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', () => {
    setLoading(false)
  })

  return (
    <SSRProvider>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <>
            {loading && <LoadingPage />}
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
              />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ThemeProvider>
      </Provider>
    </SSRProvider>
  )
}

export default appWithTranslation(MyApp)
