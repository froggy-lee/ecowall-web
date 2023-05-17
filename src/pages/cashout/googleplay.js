import React from 'react'
import GooglePlayPage from '/src/modules/CashOutPage/GooglePlayPage'
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

function googleplay() {
  return (
    <>
      <GooglePlayPage />
    </>
  )
}

export default googleplay
