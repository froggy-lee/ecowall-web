import React from 'react'
import BnbPage from '/src/modules/CashOutPage/BnbPage'
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

function bnb() {
  return (
    <>
      <BnbPage />
    </>
  )
}

export default bnb
