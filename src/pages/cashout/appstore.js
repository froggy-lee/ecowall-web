import React from 'react'
import AppStorePage from '/src/modules/CashOutPage/AppStorePage'
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

function appstore() {
  return (
    <>
      <AppStorePage />
    </>
  )
}

export default appstore
