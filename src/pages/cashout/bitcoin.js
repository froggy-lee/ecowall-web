import React from 'react'
import BitcoinPage from '/src/modules/CashOutPage/BitcoinPage'
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

function bitcoin() {
  return (
    <>
      <BitcoinPage />
    </>
  )
}

export default bitcoin
