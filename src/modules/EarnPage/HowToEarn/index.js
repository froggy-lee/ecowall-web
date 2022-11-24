import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import * as S from './styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTranslation } from 'next-i18next'
import { LocalStorage } from '/src/utils/localStorage'

function HowToEarn() {
  const { t } = useTranslation('earn')
  const [Click, setClick] = useState(false)
  const getEarn = LocalStorage.get('earn')

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    dots: false
  }

  useEffect(() => {
    setClick(getEarn)
  }, [getEarn])

  const handleClick = async () => {
    setClick(true)
    LocalStorage.set(true, 'earn')
  }

  return (
    <S.Wrapper className={`${Click === true ? 'active' : ''}`}>
      <S.WrapperTilte>
        <div className="title">
          <S.Cansel>
            <Image
              onClick={handleClick}
              src="/images/icons/cancel.png"
              alt=""
              width={22}
              height={22}
            />
          </S.Cansel>
          <S.Title>{t('howEarn')}</S.Title>
        </div>
        <div className="background"></div>
      </S.WrapperTilte>
      <S.WrapperStep>
        <S.TitleStep>{t('step')}</S.TitleStep>
        <S.Step>
          <Slider {...settings}>
            <div className="step1">
              <Image
                src={'/images/step1.png'}
                alt=""
                width={246}
                height={130}
              />
            </div>
            <div className="step2">
              <Image
                src={'/images/step2.png'}
                alt=""
                width={246}
                height={130}
              />
            </div>
            <div className="step3">
              <Image
                src={'/images/step3.png'}
                alt=""
                width={246}
                height={130}
              />
            </div>
          </Slider>
          <S.StepOn>
            <div className="step1">
              <Image
                src={'/images/step1.png'}
                alt=""
                width={246}
                height={130}
              />
            </div>
            <div className="step2">
              <Image
                src={'/images/step2.png'}
                alt=""
                width={246}
                height={130}
              />
            </div>
            <div className="step3">
              <Image
                src={'/images/step3.png'}
                alt=""
                width={246}
                height={130}
              />
            </div>
          </S.StepOn>
        </S.Step>
      </S.WrapperStep>
    </S.Wrapper>
  )
}

export default HowToEarn
