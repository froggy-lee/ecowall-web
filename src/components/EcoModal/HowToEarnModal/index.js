import React, { useCallback } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import EcoModal from '..'
import Step from './Step'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectShowHowToEarn, showHowToEarnModal } from '/src/store/slice/modal'
import { useTranslation } from 'next-i18next'

function HowToEarnModal() {
  const showHowToEarn = useSelector(selectShowHowToEarn)
  const dispatch = useDispatch()
  const { t } = useTranslation('header')
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    dots: true,
    fade: true
  }

  const onToggle = useCallback(() => {
    dispatch(showHowToEarnModal(!showHowToEarn))
  }, [dispatch, showHowToEarn])

  const data = [
    {
      id: 1,
      titleTop: `${t('step1')}`,
      titleBot: `${t('title1')}`,
      des: `${t('des1')}`,
      image: '/images/img-modal.png',
      button: false
    },
    {
      id: 2,
      titleTop: `${t('step2')}`,
      titleBot: `${t('title2')}`,
      des: `${t('des2')}`,
      image: '/images/img-modal.png',
      button: true
    },
    {
      id: 3,
      titleTop: `${t('step3')}`,
      titleBot: `${t('title3')}`,
      des: `${t('des3')}`,
      image: '/images/img-modal.png',
      button: false
    },
    {
      id: 4,
      titleTop: `${t('step4')}`,
      titleBot: `${t('title4')}`,
      des: `${t('des4')}`,
      image: '/images/img-modal.png',
      button: false
    },
    {
      id: 5,
      titleTop: `${t('step5')}`,
      titleBot: `${t('title5')}`,
      des: `${t('des5')}`,
      image: '/images/img-modal.png',
      button: false
    }
  ]

  return (
    <EcoModal
      isOpen
      onToggle={onToggle}
      background="rgba(0, 0, 0, 0)"
      width={62.7}
      helpmodal="true"
    >
      <S.Wrapper>
        <Slider {...settings}>
          {data?.map(item => {
            return (
              <Step
                key={item.id}
                titleTop={item.titleTop}
                titleBot={item.titleBot}
                des={item.des}
                image={item.image}
                button={item.button}
              />
            )
          })}
        </Slider>
      </S.Wrapper>
    </EcoModal>
  )
}

export default HowToEarnModal
