import React from 'react'
import SteamPage from '/src/modules/CashOutPage/SteamPage'
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

function steam() {
  return (
    <>
      <SteamPage />
    </>
  )
}

export default steam
