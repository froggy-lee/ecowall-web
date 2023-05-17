import React from 'react'
import ZalandoPage from '/src/modules/CashOutPage/ZalandoPage'
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

function visa() {
  return (
    <>
      <ZalandoPage />
    </>
  )
}

export default visa
