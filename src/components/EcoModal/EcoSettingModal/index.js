import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { selectShowSetting, showSettingdModal } from '/src/store/slice/modal'
import { BASE_API_URL } from '/src/constants'
import EcoModal from '/src/components/EcoModal'

function EcoSettingModal() {
  const dispatch = useDispatch()
  const { t } = useTranslation('header')
  const showSetting = useSelector(selectShowSetting)

  const dataSetting = [
    {
      urlIcon: '/images/icons/help-icon.png',
      content: `${t('questions')}`,
      link: '/static/questions.html'
    },
    {
      urlIcon: '/images/icons/mail-icon.png',
      content: `${t('feedback')}`,
      link: '/static/feedback.html'
    },
    {
      urlIcon: '/images/icons/lock-icon.png',
      content: `${t('privacyPolicy')}`,
      link: '/static/privacy-policy.html'
    },
    {
      urlIcon: '/images/icons/text-icon.png',
      content: `${t('termsService')}`,
      link: '/static/terms-of-service.html'
    }
  ]

  const onToggle = useCallback(() => {
    dispatch(showSettingdModal(!showSetting))
  }, [dispatch, showSetting])

  return (
    <>
      <EcoModal
        isOpen
        onToggle={onToggle}
        background="rgba(0,0,0,0)"
        width={34}
      >
        <S.Wrapper>
          <S.ContentTop>
            <Image
              src={'/images/icons/help-support.png'}
              alt=""
              width={25}
              height={25}
            />
            <S.Title>{t('support')}</S.Title>
            <Image
              className="circle"
              src={'/images/icons/x-circle.png'}
              alt=""
              width={28}
              height={28}
              onClick={onToggle}
            />
          </S.ContentTop>
          <S.ContentBot>
            {dataSetting.map((item, index) => {
              return (
                <S.Container key={index}>
                  <Link href={`${BASE_API_URL}${item.link}`}>
                    <a target="_blank" className="link-page">
                      <div className="icon">
                        <Image
                          src={`${item.urlIcon}`}
                          alt=""
                          width={20}
                          height={22}
                        />
                      </div>
                      <div>
                        <S.Content>{item.content}</S.Content>
                      </div>
                      <div className="arrow">
                        <Image
                          src={'/images/icons/arrow-setting.png'}
                          alt=""
                          width={18}
                          height={18}
                        />
                      </div>
                    </a>
                  </Link>
                </S.Container>
              )
            })}
          </S.ContentBot>
        </S.Wrapper>
      </EcoModal>
    </>
  )
}

export default EcoSettingModal
