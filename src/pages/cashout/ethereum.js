import React from 'react'
import EthereumPage from '/src/modules/CashOutPage/EthereumPage'
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

function ethereum() {
  return (
    <>
      <EthereumPage />
    </>
  )
}

export default ethereum
