import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile, selectMissionEarn } from '/src/store/slice/users'
import { showLoginModal } from '/src/store/slice/modal'

function EcoNetwork() {
  const { t } = useTranslation('earn')
  const data = useSelector(selectMissionEarn)
  const profile = useSelector(selectProfile)
  const [mission, setMission] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    let arr = data.filter(value => value.type === 'offerWall')
    setMission(arr)
  }, [data])

  const handleOpenModalGame = link => {
    if (profile) {
      let url = link.replace('[username]', profile.email)
      window.open(
        url,
        '',
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=800, height=600, top=150, left=150`
      )
    } else {
      dispatch(showLoginModal(true))
    }
  }

  return (
    <S.WrapperEcoNetwork>
      <S.ContentTop>
        <S.Title>{t('ecoNetwork')}</S.Title>
        <S.Content>{t('contentEarn')}</S.Content>
      </S.ContentTop>
      <S.ContentBot>
        {mission?.map(item => {
          return (
            <div
              className={item.popularity > 50 ? 'icon-box' : 'icon-box1'}
              key={item._id}
              onClick={() => handleOpenModalGame(item?.url)}
            >
              <Image src={item.logo} alt="" width={150} height={80} />
              <S.Bonus>
                {item.bonus ? `${item.bonus * 100} % BONUS` : ''}
              </S.Bonus>
              <S.WrapperPopularity>
                <S.PopularityText>
                  {t('popularity')} : {item.popularity}
                </S.PopularityText>
                <S.Progress>
                  <S.Determinate percent={item.popularity} />
                </S.Progress>
              </S.WrapperPopularity>
            </div>
          )
        })}
      </S.ContentBot>
    </S.WrapperEcoNetwork>
  )
}

export default EcoNetwork
