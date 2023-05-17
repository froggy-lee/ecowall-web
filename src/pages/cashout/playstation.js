import React from 'react'
import PlayStationPage from '/src/modules/CashOutPage/PlayStationPage'
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

function playstation() {
  return (
    <>
      <PlayStationPage />
    </>
  )
}

export default playstation
