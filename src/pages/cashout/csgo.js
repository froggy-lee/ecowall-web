import React from 'react'
import CsgoPage from '/src/modules/CashOutPage/CsgoPage'
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

function csgo() {
  return (
    <>
      <CsgoPage />
    </>
  )
}

export default csgo
