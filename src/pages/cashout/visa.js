import React from 'react'
import VisaPage from '/src/modules/CashOutPage/VisaPage'
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
      <VisaPage />
    </>
  )
}

export default visa
