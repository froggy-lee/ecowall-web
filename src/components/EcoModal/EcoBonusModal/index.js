import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import EcoModal from '/src/components/EcoModal'
import { selectShowBonus, showEcoBonusModal } from '/src/store/slice/modal'
import { checkBonusCodeAction } from '/src/store/slice/users'
import * as S from './styles'
import { useTranslation } from 'next-i18next'
import { toast } from 'react-toastify'

function EcoBonusModal() {
  const dispatch = useDispatch()
  const showBonus = useSelector(selectShowBonus)
  const { t } = useTranslation('rewards')
  const [bonusCode, setBonusCode] = useState('')

  const onToggle = useCallback(() => {
    dispatch(showEcoBonusModal(!showBonus))
  }, [dispatch, showBonus])

  const handleCheckBonusCode = useCallback(
    async bonusCode => {
      try {
        await dispatch(checkBonusCodeAction({ code: bonusCode })).unwrap()
        toast.success('Enter the code successfully', {
          position: toast.POSITION.BOTTOM_LEFT
        })
      } catch (error) {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_LEFT
        })
      }
    },
    [dispatch]
  )

  const handleChange = e => {
    setBonusCode(e.target.value)
  }

  return (
    <EcoModal
      isOpen
      onToggle={onToggle}
      width={34}
      background="rgba(0, 0, 0, 0)"
    >
      <S.Wrapper>
        <S.ContentTop>
          <S.Title>{t('bonusCode')}</S.Title>
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
          <S.Content>{t('desBonus')}</S.Content>
          <S.Social>
            <Image
              src={'/images/Facebook-bonus.png'}
              width={48}
              height={48}
              alt=""
            />
            <S.Twitter>
              <Image
                src={'/images/Twitter-bonus.png'}
                width={48}
                height={48}
                alt=""
              />
            </S.Twitter>
            <Image
              src={'/images/Telegram-bonus.png'}
              width={48}
              height={48}
              alt=""
            />
          </S.Social>
          <S.Input
            placeholder={t('inputBonus')}
            value={bonusCode}
            onChange={handleChange}
          />
          <S.Claim onClick={() => handleCheckBonusCode(bonusCode)}>
            {t('claim')}
          </S.Claim>
        </S.ContentBot>
      </S.Wrapper>
    </EcoModal>
  )
}

export default EcoBonusModal
