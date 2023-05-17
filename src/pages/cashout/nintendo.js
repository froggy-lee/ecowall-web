import React from 'react'
import NintendoPage from '/src/modules/CashOutPage/NintendoPage'
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

function nintendo() {
  return (
    <>
      <NintendoPage />
    </>
  )
}

export default nintendo
