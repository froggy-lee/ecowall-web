import React from 'react'
import XboxLivePage from '/src/modules/CashOutPage/XboxLivePage'
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

function xboxlive() {
  return (
    <>
      <XboxLivePage />
    </>
  )
}

export default xboxlive
