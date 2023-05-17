import React from 'react'
import EcoWallPage from '/src/modules/CashOutPage/EcoWallPage'
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

function ecowall() {
  return (
    <>
      <EcoWallPage />
    </>
  )
}

export default ecowall
