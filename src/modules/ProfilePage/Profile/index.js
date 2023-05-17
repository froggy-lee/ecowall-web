import React, { useEffect, useState, useCallback } from 'react'
import * as S from './styles'
import Image from 'next/image'
import LineGraph from './LineGraph'
import SettingSection from '../Setting'
import { useTranslation } from 'next-i18next'
import EcoTabs from '/src/components/EcoTabs'
import { Tabs, Tab } from 'react-bootstrap'
import EarningTab from '/src/components/EcoTabs/EarningTab'
import PendingTab from '/src/components/EcoTabs/EarningTab/PendingTab'
import WithdrawalsTab from '/src/components/EcoTabs/WithdrawalsTab'
import { getRecentEarnByUserRequest } from '/src/api/users/request'

const expLevel = {
  exp: 10,
  levelUp: 100
}

const GENERAL_TAB = 0
const EARNINGS_TAB = 1
const WITHDRAWALS_TAB = 2

function ProfileSection({ profile }) {
  const { t } = useTranslation('profile')
  const [account, setAccount] = useState()
  const [active, setActive] = useState(GENERAL_TAB)
  const [percentExp, setPercentExp] = useState()
  const [recentEarning, setRecentEarning] = useState([])

  const ChangeName = profile => {
    setAccount(profile)
  }

  const getdata = useCallback(async id => {
    const res = await getRecentEarnByUserRequest(id)
    setRecentEarning(res)
  }, [])

  useEffect(() => {
    profile?._id && getdata(profile?._id) //'627a16fd76ffcb930a197b85'
  }, [getdata, profile?._id])

  useEffect(() => {
    setAccount(profile)
    setPercentExp((expLevel.exp / expLevel.levelUp) * 100)
  }, [profile])

  const changeTab = useCallback(
    e => {
      const tab = parseInt(e.target.id, GENERAL_TAB)
      if (tab !== active) {
        setActive(tab)
      }
    },
    [active]
  )

  return (
    <S.WrapperProfile>
      <S.Wrapper>
        <div className="top-section">
          <div>
            <div className="account">
              <div className="avatar">
                <Image
                  src={account?.avatar || '/images/no-avatar.png'}
                  width={80}
                  height={80}
                  alt="avatar"
                />
              </div>
              <div className="account-infor">
                <h1 className="name">
                  <div>{account?.username}</div>
                  <span className="level">
                    {t('level')}: {account?.level}
                  </span>
                </h1>
                <p>
                  {expLevel.exp} XP Earned. {expLevel.levelUp - expLevel.exp} XP
                  required for next level up.
                </p>
                <div className="full-exp">
                  <S.Exp exp={percentExp}></S.Exp>
                </div>
              </div>
            </div>
            <div className="des">
              <S.Des>
                <h2>{account?.completedOffers}</h2>
                <div>{t('offers')}</div>
              </S.Des>
              <S.Des>
                <h2>{account?.coinsEarned}</h2>
                <div>{t('earned')}</div>
              </S.Des>
              <S.Des>
                <h2>{account?.referral}</h2>
                <div>{t('usersReferred')}</div>
              </S.Des>
            </div>
            <div className="list-btn">
              <S.Button
                className="text"
                id={GENERAL_TAB}
                active={active === GENERAL_TAB}
                onClick={changeTab}
              >
                <div>
                  <Image
                    src="/images/icons/general.png"
                    width={6}
                    height={16}
                    alt=""
                    onClick={changeTab}
                    id={GENERAL_TAB}
                  />
                </div>
                {t('general')}
              </S.Button>
              <S.Button
                id={EARNINGS_TAB}
                active={active === EARNINGS_TAB}
                onClick={changeTab}
              >
                <div>
                  <Image
                    src="/images/icons/earnings.png"
                    width={16}
                    height={16}
                    alt=""
                    onClick={changeTab}
                    id={EARNINGS_TAB}
                  />
                </div>
                {t('earnings')}
              </S.Button>
              <S.Button
                id={WITHDRAWALS_TAB}
                active={active === WITHDRAWALS_TAB}
                onClick={changeTab}
              >
                <div>
                  <Image
                    src="/images/icons/withdrawals.png"
                    width={16}
                    height={16}
                    alt=""
                    onClick={changeTab}
                    id={WITHDRAWALS_TAB}
                  />
                </div>
                {t('withdrawals')}
              </S.Button>
            </div>
          </div>
          <LineGraph data={recentEarning} />
        </div>
      </S.Wrapper>
      <S.WrapperTab>
        <S.TabGeneral active={active === GENERAL_TAB}>
          <SettingSection profile={account} ChangeName={ChangeName} />
        </S.TabGeneral>
        <S.TabEarning active={active === EARNINGS_TAB}>
          <EcoTabs>
            <Tabs id="controlled-tab-example">
              <Tab eventKey="earn" title={t('earnings')}>
                <EcoTabs>
                  <EarningTab />
                </EcoTabs>
              </Tab>
              <Tab eventKey="pending-offer" title={t('pendingOffer')}>
                <PendingTab />
              </Tab>
            </Tabs>
          </EcoTabs>
        </S.TabEarning>
        <S.TabWithDraw active={active === WITHDRAWALS_TAB}>
          <WithdrawalsTab />
        </S.TabWithDraw>
      </S.WrapperTab>
    </S.WrapperProfile>
  )
}

export default ProfileSection
