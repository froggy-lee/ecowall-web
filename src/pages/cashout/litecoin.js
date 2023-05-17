import React from 'react'
import LitecoinPage from '/src/modules/CashOutPage/LitecoinPage'
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

function litecoin() {
  return (
    <>
      <LitecoinPage />
    </>
  )
}

export default litecoin
