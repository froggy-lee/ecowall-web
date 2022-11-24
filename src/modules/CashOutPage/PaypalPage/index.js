import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

function PayPalPage() {
  const [coinPrice, setCoinPrice] = useState(0)
  const router = useRouter()
  const { t } = useTranslation('cashout')
  const [items, setItems] = useState([
    {
      url: '/images/cashout/paypal-page.png',
      price: 5,
      active: false
    },
    {
      url: '/images/cashout/paypal-page.png',
      price: 10,
      active: false
    },
    {
      url: '/images/cashout/paypal-page.png',
      price: 20,
      active: false
    },
    {
      url: '/images/cashout/paypal-page.png',
      price: 30,
      active: false
    },
    {
      url: '/images/cashout/paypal-page.png',
      price: 50,
      active: false
    },
    {
      url: '/images/cashout/paypal-page.png',
      price: 75,
      active: false
    },
    {
      url: '/images/cashout/paypal-page.png',
      price: 100,
      active: false
    },
    {
      url: '/images/cashout/paypal-page.png',
      price: 200,
      active: false
    }
  ])

  const backToCashout = () => {
    router.push('/cashout')
  }

  const handleActive = index => {
    setCoinPrice(items[index]?.price)
    let newItems = []
    for (let i = 0; i < items.length; i++) {
      if (i === index) {
        newItems.push({
          ...items[i],
          active: true
        })
      } else {
        newItems.push({
          ...items[i],
          active: false
        })
      }
    }
    setItems(newItems)
  }

  return (
    <S.Wrapper>
      <div className="price-selection">
        <div className="top">
          <div>
            <Image
              src="/images/cashout/paypal-small.png"
              width={215}
              height={65}
              alt=""
            />
          </div>
          <div className="des">
            <Image src="/images/icons/tick.png" width={22} height={22} alt="" />
            <div className="text">{t('desPaypal')}</div>
          </div>
        </div>
        <div className="list-paypal">
          {items.map((item, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div
                className={item.active ? 'item-active' : 'item'}
                key={index}
                onClick={() => handleActive(index)}
              >
                <div>
                  <Image src={item.url} width={197} height={109} alt="" />
                  <S.Price>${item.price}</S.Price>
                  {item.active && (
                    <S.Checkbox
                      type="checkbox"
                      name="sport"
                      checked={item.active}
                      readOnly
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="withdraw">
        <div className="coin-price">
          <div>
            <span>{t('free')}</span>{' '}
            <span>${(0.05 * coinPrice).toFixed(2)}</span>
          </div>
          <div>
            <span>{t('coinPrice')}</span> <span>{coinPrice}</span>
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

export default PayPalPage
