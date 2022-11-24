/* eslint-disable no-unused-vars */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  BannerSection,
  FAQsSection,
  InstallAppSection,
  TutorialSection,
  BannersBottom
} from '/src/modules/HomePage'
import { useState, useEffect } from 'react'
import LoadingHomePage from '/src/components/EcoLoading/LoadingHomePage'
import { checkPageLoad, selectPageLoad } from '/src/store/slice/modal'
import { useDispatch, useSelector } from 'react-redux'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'signIn',
        'signUp',
        'forgotPass',
        'homepage',
        'footer'
      ]))
    }
  }
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const checkPage = useSelector(selectPageLoad)
  const preLoad = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      dispatch(checkPageLoad(false))
    }, 3000)
  }

  useEffect(() => {
    preLoad()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading && checkPage ? (
        <LoadingHomePage />
      ) : (
        <>
          <BannerSection />
          <TutorialSection />
          <InstallAppSection />
          <FAQsSection />
          <BannersBottom />
        </>
      )}
    </>
  )
}
