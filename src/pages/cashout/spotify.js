import React from 'react'
import SpotifyPage from '/src/modules/CashOutPage/SpotifyPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'signIn',
        'signUp',
        'forgotPass',
        'cashout',
        'footer'
      ]))
    }
  }
}

function spotify() {
  return (
    <>
      <SpotifyPage />
    </>
  )
}

export default spotify
