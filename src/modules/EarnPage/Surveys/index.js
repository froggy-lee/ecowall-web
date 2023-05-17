import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfile, selectMissionEarn } from '/src/store/slice/users'
import { showLoginModal } from '/src/store/slice/modal'

function Surveys() {
  const { t } = useTranslation('earn')
  const data = useSelector(selectMissionEarn)
  const profile = useSelector(selectProfile)
  const [mission, setMission] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    let arr = data.filter(value => value.type === 'surveys')
    setMission(arr)
  }, [data])

  const handleOpenModalGame = link => {
    if (profile) {
      let url = link.replace('[username]', profile.email)
      window.open(url, 'asdsadsadsad', 'top=10,right=10,width=800,height=600')
    } else {
      dispatch(showLoginModal(true))
    }
  }

  return (
    <S.Wrapper>
      <S.ContentTop>
        <S.Title>{t('surveys')}</S.Title>
        <S.Content>{t('contentSurveys')}</S.Content>
      </S.ContentTop>
      <S.ContentBot>
        {mission?.map(item => {
          return (
            <div key={item._id} onClick={handleOpenModalGame}>
              <S.ImageTop>
                <Image
                  src={item.logo}
                  alt=""
                  width={269}
                  height={91}
                  layout=""
                />
                <S.WrapperPopularity>
                  <S.PopularityText>
                    Popularity : {item.popularity}
                  </S.PopularityText>
                  <S.Progress>
                    <S.Determinate width={item.popularity} />
                  </S.Progress>
                </S.WrapperPopularity>
              </S.ImageTop>
            </div>
          )
        })}
      </S.ContentBot>
    </S.Wrapper>
  )
}

export default Surveys
