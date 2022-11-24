import React from 'react'
import DogecoinPage from '/src/modules/CashOutPage/DogecoinPage'
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

function dogecoin() {
  return (
    <>
      <DogecoinPage />
    </>
  )
}

export default dogecoin
