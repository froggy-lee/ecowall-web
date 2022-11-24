import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const coin = {
  name: 'ethereum',
  acronym: 'ETH',
  rate: 31715.24,
  free: 731
}

function EthereumPage() {
  const router = useRouter()
  const [coinbaseWallet, setCoinbaseWallet] = useState(false)
  const [address, setAddress] = useState('')
  const [coinAmount, setCoinAmount] = useState('')
  const { t } = useTranslation('cashout')
  const backToCashout = () => {
    router.push('/cashout')
  }

  const handleChangeWallet = status => {
    setCoinbaseWallet(status)
  }

  const handleChangeAddress = e => {
    setAddress(e.target.value)
  }

  const handleChangeCoinAmount = e => {
    {
      !(e.target.value < 0) && setCoinAmount(e.target.value)
    }
  }
  return (
    <S.Wrapper>
      <div className="price-selection">
        <div className="top">
          <div className="top-left">
            <div>
              <Image
                src="/images/cashout/ethereum-small.png"
                width={215}
                height={65}
                alt=""
              />
            </div>
            <div className="des">
              <Image
                src="/images/icons/tick.png"
                width={21}
                height={21}
                alt=""
              />
              <div className="text">{t('desEthereum')}</div>
            </div>
          </div>
        </div>
        <div className="wallet-address-section">
          <div className="list-btn">
            <S.BtnAddress
              className={!coinbaseWallet ? 'active' : ''}
              onClick={() => {
                handleChangeWallet(false)
              }}
            >
              {coin.name} {t('address')}
              <label className="btn-radio">
                <input
                  type="radio"
                  name=""
                  id=""
                  checked={!coinbaseWallet}
                  readOnly
                />
                <span className="style-radio"></span>
              </label>
            </S.BtnAddress>
            <S.BtnAddress
              className={coinbaseWallet ? 'active' : ''}
              onClick={() => {
                handleChangeWallet(true)
              }}
            >
              {t('coinBase')}
              <label className="btn-radio">
                <input
                  type="radio"
                  name=""
                  id=""
                  checked={coinbaseWallet}
                  readOnly
                />
                <span className="style-radio"></span>
              </label>
            </S.BtnAddress>
          </div>
          <div className="address-wallet">
            <div className="input-address">
              <S.Input
                type="text"
                name=""
                id=""
                placeholder={t('enterAddress')}
                value={address}
                onChange={handleChangeAddress}
              />
              <S.Text className="text">
                {coinbaseWallet
                  ? 'The Coinbase Email for your Coinbase Account.'
                  : 'The Address for your wallet.'}
              </S.Text>
            </div>
            <S.BtnSave>{t('saveAddress')}</S.BtnSave>
          </div>
          <div className="coin-rate">
            <div className="input-coin">
              <S.Input
                type="number"
                name=""
                id=""
                min="0"
                placeholder={t('enterCoin')}
                value={coinAmount}
                onChange={handleChangeCoinAmount}
              />
              <S.Text>
                {t('minimum')}: {coinbaseWallet ? '100' : '5000'} {t('coins')}{' '}
                ($
                {coinbaseWallet ? '0.01' : '5.00'}).
              </S.Text>
            </div>
            <div className="rate">
              <span>${coin.rate}</span>
              <span>
                {coin.acronym} {t('rate')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="withdraw">
        <div className="coin-price">
          <div>
            <span>{t('free')}</span>{' '}
            <span>{coinbaseWallet ? 0 : coin.free}</span>
          </div>
          <div>
            <span>
              {t('receive')} ({coin.acronym}){' '}
            </span>{' '}
            <span className="coin-amount">{coinAmount || 0}</span>
          </div>
        </div>
        <div className="btn-withdraw">
          <button>{t('withdrawals')}</button>
        </div>
      </div>
      <div className="btn-back">
        <S.ButtonBack onClick={backToCashout}>{t('back')}</S.ButtonBack>
      </div>
    </S.Wrapper>
  )
}
export default EthereumPage
