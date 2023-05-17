import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Cashout from './Cashout'
import StatisticalTables from './StatisticalTables'
import * as S from './styles'
import { useTranslation } from 'next-i18next'
import { apiListBanner } from '/src/api/banners/request'
import { toast } from 'react-toastify'

const BannerSection = () => {
  const router = useRouter()
  const [banners, setBanners] = useState([])
  const { t } = useTranslation('homepage')

  const StatisTables = [
    {
      image: '/images/icons/clock.png',
      title: '0h 17m 16s',
      des: `${t('averageTime')}`,
      alt: 'clock'
    },
    {
      image: '/images/icons/wallet.png',
      title: '$ 13.02',
      des: `${t('averageMoney')}`,
      alt: 'wallet'
    },
    {
      image: '/images/icons/coin1.png',
      title: '$ 9,075,104.39',
      des: `${t('totalUsd')}`,
      alt: 'coin'
    }
  ]

  const fetchDataBanner = useCallback(async () => {
    try {
      const res = await apiListBanner()
      setBanners(res.data.data)
    } catch (error) {
      toast.error(error.message)
    }
  }, [])

  useEffect(() => {
    fetchDataBanner()
    return () => {
      setBanners([])
    }
  }, [fetchDataBanner])

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: false
  }

  const handleButtonStart = () => {
    router.push('/earn')
  }

  const slideClick = () => {
    router.push('/')
  }

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {banners?.map(item => (
          <div key={item._id} className="slide">
            <Image
              src={item.url}
              alt=""
              width={800}
              height={800}
              onClick={slideClick}
            />
          </div>
        ))}
      </Slider>
      <div className="back-ground">
        <div className="introduce">
          <h1 className="title">{t('startTitle')}</h1>
          <p className="des">{t('des')}</p>
          <S.Button onClick={handleButtonStart}>{t('startEarning')}</S.Button>
          <Cashout data={t('cashout')} />
        </div>
        <StatisticalTables data={StatisTables} />
      </div>
    </S.Wrapper>
  )
}

export default BannerSection
