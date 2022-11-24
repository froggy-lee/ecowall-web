import React from 'react'
import PaypalPage from '/src/modules/CashOutPage/PaypalPage'
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

function paypal() {
  return (
    <>
      <PaypalPage />
    </>
  )
}

export default paypal
