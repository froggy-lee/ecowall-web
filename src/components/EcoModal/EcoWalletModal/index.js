import React, { useCallback } from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useTranslation } from 'next-i18next'
import {
  selectShowEcoWallet,
  showEcoWalletdModal
} from '/src/store/slice/modal'
import { useDispatch, useSelector } from 'react-redux'
import EcoModal from '/src/components/EcoModal'

function EcoWalletModal() {
  const { t } = useTranslation('header')
  const showEcoWallet = useSelector(selectShowEcoWallet)
  const dispatch = useDispatch()

  const onToggle = useCallback(() => {
    dispatch(showEcoWalletdModal(!showEcoWallet))
  }, [dispatch, showEcoWallet])

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
              src={'/images/icons/eco-icon.png'}
              alt=""
              width={28}
              height={28}
            />
            <S.Title>{t('wallet')}</S.Title>
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
            <S.TitleBot>Coming Soon</S.TitleBot>
          </S.ContentBot>
          {/* <S.ContentBot>
            <S.TitleBot>{t('Payouts')}</S.TitleBot>
            <S.Content>
              {t('accounts')}
              <br />
              {t('Crypto')}
            </S.Content>
            <S.Midle>
              <Image
                src={'/images/icons/Frame.png'}
                alt=""
                width={30}
                height={30}
              />
              3.500.000 = ECO $5,00
            </S.Midle>
            <S.Button>
              <S.InputEnterWallet placeholder={t('enterAddress')} />
              <S.ButtonSaveWallet>
                {t('saveAddress')}
                <div className="icon">
                  <Image
                    src={'/images/icons/arrow-wallet.png'}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </S.ButtonSaveWallet>
            </S.Button>
          </S.ContentBot> */}
        </S.Wrapper>
      </EcoModal>
    </>
  )
}

export default EcoWalletModal
