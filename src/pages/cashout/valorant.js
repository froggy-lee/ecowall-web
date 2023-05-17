import React from 'react'
import ValorantPage from '/src/modules/CashOutPage/ValorantPage'
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

function valorant() {
  return (
    <>
      <ValorantPage />
    </>
  )
}

export default valorant
