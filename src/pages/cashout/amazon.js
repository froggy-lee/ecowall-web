import React from 'react'
import AmazonPage from '/src/modules/CashOutPage/AmazonPage'
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

function amazon() {
  return (
    <>
      <AmazonPage />
    </>
  )
}

export default amazon
