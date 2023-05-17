import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

function Section() {
  const router = useRouter()
  const { t } = useTranslation('cashout')
  const cashURL = [
    {
      url_img: '/images/cashout/ecowall.png',
      url_page: '/ecowall'
    },
    {
      url_img: '/images/cashout/paypal.png',
      url_page: '/paypal'
    },
    {
      url_img: '/images/cashout/bnb.png',
      url_page: '/bnb'
    },
    {
      url_img: '/images/cashout/ethereum.png',
      url_page: '/ethereum'
    },
    {
      url_img: '/images/cashout/bitcoin.png',
      url_page: '/bitcoin'
    },
    {
      url_img: '/images/cashout/litecoin.png',
      url_page: '/litecoin'
    },
    {
      url_img: '/images/cashout/dogecoin.png',
      url_page: '/dogecoin'
    }
  ]

  const giftcardsURL = [
    {
      url_img: '/images/cashout/googleplay.png',
      url_page: '/googleplay'
    },
    {
      url_img: '/images/cashout/appstore.png',
      url_page: '/appstore'
    },
    {
      url_img: '/images/cashout/visa.png',
      url_page: '/visa'
    },
    {
      url_img: '/images/cashout/amazon.png',
      url_page: '/amazon'
    },
    {
      url_img: '/images/cashout/netflix.png',
      url_page: '/netflix'
    },
    {
      url_img: '/images/cashout/spotify.png',
      url_page: '/spotify'
    },
    {
      url_img: '/images/cashout/zalando.png',
      url_page: '/zalando'
    },
    {
      url_img: '/images/cashout/steam.png',
      url_page: '/steam'
    },
    {
      url_img: '/images/cashout/playstation.png',
      url_page: '/playstation'
    },
    {
      url_img: '/images/cashout/xbox.png',
      url_page: '/xbox'
    },
    {
      url_img: '/images/cashout/nintendo.png',
      url_page: '/nintendo'
    },
    {
      url_img: '/images/cashout/blizzard.png',
      url_page: '/blizzard'
    }
  ]

  const skinsURL = [
    {
      url_img: '/images/cashout/csgo.png',
      url_page: '/csgo'
    },
    {
      url_img: '/images/cashout/fortnite.png',
      url_page: '/fortnite'
    },
    {
      url_img: '/images/cashout/roblox.png',
      url_page: '/roblox'
    },
    {
      url_img: '/images/cashout/lol.png',
      url_page: '/lol'
    },
    {
      url_img: '/images/cashout/valorant.png',
      url_page: '/valorant'
    }
  ]

  const handlChangePage = url => {
    router.push(`/cashout${url}`)
  }

  return (
    <S.Wrapper>
      <div className="title">
        <h1>{t('cashout')}</h1>
      </div>
      <div className="des">
        <div className="icon">
          <Image
            src="/images/icons/tick.png"
            width={30}
            height={30}
            alt="pic"
          />
        </div>
        <div className="text">{t('cashoutContent')}</div>
      </div>
      <div className="cash">
        <div className="title">{t('cash')}</div>
        <div className="list">
          {cashURL.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.url_img}
                width={215}
                height={100}
                alt="pic"
                onClick={() => handlChangePage(item.url_page)}
              />
            )
          })}
        </div>
      </div>
      <div className="giftcards">
        <div className="title">{t('giftCards')}</div>
        <div className="list">
          {giftcardsURL.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.url_img}
                width={215}
                height={100}
                alt="pic"
                onClick={() => handlChangePage(item.url_page)}
              />
            )
          })}
        </div>
      </div>
      <div className="skins">
        <div className="title">{t('skins')}</div>
        <div className="list">
          {skinsURL.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.url_img}
                width={215}
                height={100}
                alt="pic"
                onClick={() => handlChangePage(item.url_page)}
              />
            )
          })}
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Section
