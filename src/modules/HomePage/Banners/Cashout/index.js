import Images from 'next/image'
import * as S from './styles'
import { useRouter } from 'next/router'

const listCashout = [
  {
    name: 'ecowall',
    url_img: '/images/cashout/ecowall.png',
    url_page: '/cashout/ecowall'
  },
  {
    name: 'paypal',
    url_img: '/images/cashout/paypal.png',
    url_page: '/cashout/paypal'
  },
  {
    name: 'bnb',
    url_img: '/images/cashout/bnb.png',
    url_page: '/cashout/bnb'
  },
  {
    name: 'bitcoin',
    url_img: '/images/cashout/bitcoin.png',
    url_page: '/cashout/bitcoin'
  },
  {
    name: 'googleplay',
    url_img: '/images/cashout/googleplay.png',
    url_page: '/cashout/googleplay'
  },
  {
    name: 'appstore',
    url_img: '/images/cashout/appstore.png',
    url_page: '/cashout/appstore'
  }
]

function Cashout(props) {
  const router = useRouter()

  const handleChangePage = url => {
    router.push(url)
  }
  return (
    <S.Wrapper>
      <h1 className="cashout">{props.data}</h1>
      <div className="list-pay">
        {listCashout.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleChangePage(item.url_page)}
              className="item"
            >
              <Images
                src={item.url_img}
                width={102}
                height={46}
                alt={item.name}
              />
            </div>
          )
        })}
      </div>
    </S.Wrapper>
  )
}

export default Cashout
