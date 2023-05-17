import React from 'react'
import NetflixPage from '/src/modules/CashOutPage/NetflixPage'
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

function netflix() {
  return (
    <>
      <NetflixPage />
    </>
  )
}

export default netflix
