import React from 'react'
import FortnitePage from '/src/modules/CashOutPage/FortnitePage'
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

function fortnite() {
  return (
    <>
      <FortnitePage />
    </>
  )
}

export default fortnite
