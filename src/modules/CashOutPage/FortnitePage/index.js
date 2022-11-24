import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Select from 'react-select'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const options = [
  {
    value: 'unitedstates',
    label: (
      <S.Option>
        <Image
          src="/images/country/america.png"
          width={14}
          height={14}
          alt=""
        />
        <div>United States</div>
      </S.Option>
    )
  },
  {
    value: 'vietnam',
    label: (
      <S.Option>
        <Image
          src="/images/country/vietnam.png"
          width={14}
          height={14}
          alt=""
        />
        <div>Việt Nam</div>
      </S.Option>
    )
  },
  {
    value: 'spain',
    label: (
      <S.Option>
        <Image src="/images/country/spain.png" width={14} height={14} alt="" />
        <div>Spain</div>
      </S.Option>
    )
  },
  {
    value: 'poland',
    label: (
      <S.Option>
        <Image src="/images/country/poland.png" width={14} height={14} alt="" />
        <div>Poland</div>
      </S.Option>
    )
  }
]

function FortnitePage() {
  const [coinPrice, setCoinPrice] = useState(0)
  const router = useRouter()
  const { t } = useTranslation('cashout')
  const [items, setItems] = useState([
    {
      url: '/images/cashout/fortnite-page.png',
      price: 5,
      active: false
    },
    {
      url: '/images/cashout/fortnite-page.png',
      price: 10,
      active: false
    },
    {
      url: '/images/cashout/fortnite-page.png',
      price: 20,
      active: false
    },
    {
      url: '/images/cashout/fortnite-page.png',
      price: 30,
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
          <div className="top-left">
            <div>
              <Image
                src="/images/cashout/fortnite-small.png"
                width={215}
                height={65}
                alt=""
              />
            </div>
            <div className="des">
              <Image
                src="/images/icons/tick.png"
                width={15}
                height={15}
                alt=""
              />
              <div className="text">
                {t('desFortnite')}{' '}
                <Link href="https://www.epicgames.com/fortnite/fr/vbuckscard">
                  <a target="_blank">epicgames.com/fortnite/vbuckscard</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="country">
            <Select
              options={options}
              className="select-box"
              defaultValue={options[0]}
              instanceId="postType"
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="list">
          {items.map((item, index) => {
            return (
              <div
                className={item.active ? 'item-active' : 'item'}
                key={index}
                onClick={() => handleActive(index)}
              >
                <div>
                  <Image src={item.url} width={204} height={93} alt="" />
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
export default FortnitePage
