import React from 'react'
import BlizzardPage from '/src/modules/CashOutPage/BlizzardPage'
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

function blizzard() {
  return (
    <>
      <BlizzardPage />
    </>
  )
}

export default blizzard
