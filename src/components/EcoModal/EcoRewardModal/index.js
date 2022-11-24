import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EcoModal from '/src/components/EcoModal'
import * as S from './styles'
import { selectShowReward, showRewardModal } from '/src/store/slice/modal'

function EcoRewardModal() {
  const { t } = useTranslation('header')
  const showReward = useSelector(selectShowReward)
  const dispatch = useDispatch()

  const onToggle = useCallback(() => {
    dispatch(showRewardModal(!showReward))
  }, [dispatch, showReward])

  return (
    <>
      <EcoModal
        isOpen
        onToggle={onToggle}
        width={34}
        background="rgba(0, 0, 0, 0)"
      >
        <S.Wrapper>
          <S.ContentTop>
            <Image
              src={'/images/icons/reward.png'}
              alt=""
              width={21}
              height={21}
            />
            <S.Title>{t('rewards')}</S.Title>
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
            <Image
              src={'/images/icons/reward-big.png'}
              alt=""
              width={55}
              height={55}
            />
            <S.Content>{t('contentReward')}</S.Content>
            <S.Button>
              <S.ButtonBack onClick={onToggle}>
                <div>
                  <Image
                    src={'/images/icons/arrow-left-reward.svg'}
                    alt=""
                    width={17}
                    height={17}
                    className="icon-arrow"
                  />
                </div>
                {t('back')}
              </S.ButtonBack>
              <S.ButtonContinue>
                {t('continue')}
                <div>
                  <Image
                    src={'/images/icons/arrow-left-reward.svg'}
                    alt=""
                    width={17}
                    height={17}
                    className="icon-arrow"
                  />
                </div>
              </S.ButtonContinue>
            </S.Button>
          </S.ContentBot>
        </S.Wrapper>
      </EcoModal>
    </>
  )
}

export default EcoRewardModal
