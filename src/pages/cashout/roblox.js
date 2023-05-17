import React from 'react'
import RobloxPage from '/src/modules/CashOutPage/RobloxPage'
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

function roblox() {
  return (
    <>
      <RobloxPage />
    </>
  )
}

export default roblox
