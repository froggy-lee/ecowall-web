import React, { useState, useCallback, useEffect } from 'react'
import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  showLoginModal,
  showRewardModal,
  showSettingdModal,
  showEcoWalletdModal,
  showSignupModal,
  showNotificationModal,
  showChangePasswordModal,
  showHowToEarnModal,
  showSignupBonusModal
} from '/src/store/slice/modal'
import { logOut, selectProfile } from '/src/store/slice/users'
import { useRouter } from 'next/router'
import { IconCashout } from '/public/svgs/cashout'
import { IconHome } from '/public/svgs/home'
import { IconEarn } from '/public/svgs/earn'
import { IconReward } from '/public/svgs/reward'
import { IconLeaderboard } from '/public/svgs/leaderboard'
import { notificationAction, selectNotification } from '/src/store/slice/users'

const Guest = ({ onShowSigninModal, onShowSignup, t }) => {
  return (
    <div className="btn-login">
      <Help />
      <div className="sign-in ">
        <S.SignButton signin onClick={onShowSigninModal} className="language">
          <Image src="/images/icons/signin.png" width={22} height={22} alt="" />
          {t('signIn')}
        </S.SignButton>
      </div>
      <div>
        <S.SignButton onClick={onShowSignup} className="language">
          <Image src="/images/icons/signup.png" width={22} height={22} alt="" />
          {t('signUp')}
        </S.SignButton>
      </div>
    </div>
  )
}

const Help = () => {
  const { t } = useTranslation('header')
  const dispatch = useDispatch()
  const [close, setClose] = useState(false)
  const router = useRouter()

  const onShowHowToEarn = () => {
    dispatch(showHowToEarnModal(true))
  }

  const handleClose = () => {
    setClose(true)
  }

  return (
    <div
      className={`help ${close === true ? 'hide' : ''}`}
      onClick={onShowHowToEarn}
    >
      <S.Help>
        <div className="icon-help">
          <Image
            src={'/images/icons/icon-help.png'}
            width={33}
            height={33}
            alt=""
          />
        </div>
        <h1
          className={
            router.locale === 'hi' || router.locale === 'vi' ? 'language' : ''
          }
        >
          {t('help')}
        </h1>
        <div className="cancel-help" onClick={e => e.stopPropagation()}>
          <Image
            src={'/images/icons/cancel-help.png'}
            width={20}
            height={20}
            alt=""
            onClick={handleClose}
          />
        </div>
      </S.Help>
    </div>
  )
}

const Bonus = () => {
  const { t } = useTranslation('header')
  const dispatch = useDispatch()
  const showSignupBonus = useCallback(() => {
    dispatch(showSignupBonusModal(true))
  }, [dispatch])

  return (
    <S.WrapperBonus className="bonus" onClick={showSignupBonus}>
      <div className="icon">
        <Image
          src={'/images/icons/reward-header.png'}
          width={37}
          height={37}
          alt=""
        />
      </div>
      <S.DesBonus>
        <h1>{t('signUpBonus')}</h1>
        <p>{t('win')} $250</p>
      </S.DesBonus>
    </S.WrapperBonus>
  )
}

const Header = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('header')
  const [menuActive, setMenuActive] = useState(false)
  const profile = useSelector(selectProfile)
  const [toggle, setToggle] = useState(false)
  const router = useRouter()
  const notification = useSelector(selectNotification)
  const cashoutPage = [
    { href: '/cashout' },
    { href: '/cashout/ecowall' },
    { href: '/cashout/paypal' },
    { href: '/cashout/bnb' },
    { href: '/cashout/ethereum' },
    { href: '/cashout/bitcoin' },
    { href: '/cashout/litecoin' },
    { href: '/cashout/googleplay' },
    { href: '/cashout/appstore' },
    { href: '/cashout/visa' },
    { href: '/cashout/amazon' },
    { href: '/cashout/netflix' },
    { href: '/cashout/spotify' },
    { href: '/cashout/zalando' },
    { href: '/cashout/steam' },
    { href: '/cashout/playstation' },
    { href: '/cashout/xbox' },
    { href: '/cashout/nintendo' },
    { href: '/cashout/blizzard' },
    { href: '/cashout/csgo' },
    { href: '/cashout/lol' },
    { href: '/cashout/fortnite' },
    { href: '/cashout/roblox' },
    { href: '/cashout/valorant' }
  ]

  const renderCashout = cashoutPage.map(item => {
    return item.href
  })

  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    profile ? dispatch(notificationAction({ marked: false })) : ''
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const handleOpenMenu = () => {
    setMenuActive(!menuActive)
  }

  const onShowSigninModal = useCallback(() => {
    dispatch(showLoginModal(true))
  }, [dispatch])

  const onShowSignup = useCallback(() => {
    dispatch(showSignupModal(true))
  }, [dispatch])

  const onShowReward = useCallback(() => {
    dispatch(showRewardModal(true))
  }, [dispatch])

  const onShowSetting = useCallback(() => {
    dispatch(showSettingdModal(true))
  }, [dispatch])

  const onShowEcoWallet = useCallback(() => {
    dispatch(showEcoWalletdModal(true))
  }, [dispatch])

  const onShowNotification = useCallback(() => {
    dispatch(showNotificationModal(true))
  }, [dispatch])

  const onShowChangePassword = useCallback(() => {
    setToggle(false)
    dispatch(showChangePasswordModal(true))
  }, [dispatch])

  const handleLogout = useCallback(() => {
    setToggle(false)
    localStorage.clear()
    dispatch(logOut())
    setMenuActive(false)
    window.location.href = '/'
  }, [dispatch])

  useEffect(() => {
    setMenuActive(false)
  }, [router.pathname])
  return (
    <>
      <S.HeaderWrapper>
        <S.HambugerIconWrapper>
          {profile ? (
            <div onClick={handleOpenMenu} className="menu">
              <div>
                <Image
                  src="/images/icons/icon-menu.png"
                  alt="logo"
                  width={15}
                  height={30}
                />
              </div>
              <div className="menu-avatar">
                <Image
                  src={profile?.avatar || '/images/no-avatar.png'}
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <S.HambugerIcon onClick={handleOpenMenu}>
              <span></span>
            </S.HambugerIcon>
          )}
        </S.HambugerIconWrapper>
        <S.MenuWrapper className={menuActive === true ? 'active' : ''}>
          <Link href="/" passHref>
            <S.LogoWrapper>
              <S.LogoIcon>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={40}
                  height={36}
                />
              </S.LogoIcon>
              <S.LogoTitle>eco wall</S.LogoTitle>
            </S.LogoWrapper>
          </Link>
          <S.MenuNavBarWrapper profile={profile}>
            {profile ? (
              <S.AccountWrapper>
                <div className="account-user">
                  <div className="avatar">
                    <div onClick={handleToggle}>
                      <Image
                        src={profile?.avatar || '/images/no-avatar.png'}
                        width={50}
                        height={50}
                        alt=""
                        className="no-avatar"
                      />
                      <div className="level">{profile?.level}</div>
                      <ul className="drop-down">
                        <li>
                          <div className="account-user">
                            <div className="avatar-user">
                              <Image
                                src={profile?.avatar || '/images/no-avatar.png'}
                                width={47}
                                height={47}
                                alt=""
                                className="no-avatar"
                              />
                              <div className="level-user">{profile?.level}</div>
                            </div>
                            <div className="profile-user">
                              <div className="name-user">
                                {profile?.username}
                              </div>
                              <div className="coin-user">
                                <Image
                                  src="/images/icons/coin.png"
                                  width={15}
                                  height={15}
                                  alt=""
                                />
                                <span>{profile?.coinsEarned?.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <Image
                              src={'/images/icons/icon-profile.png'}
                              width={19}
                              height={19}
                              alt=""
                            />
                          </div>
                          <Link href="/profile" passHref>
                            <a>{t('profile')}</a>
                          </Link>
                        </li>
                        <li onClick={onShowChangePassword}>
                          <div className="icon">
                            <Image
                              src={'/images/icons/icon-key.png'}
                              width={19}
                              height={19}
                              alt=""
                            />
                          </div>
                          {t('changePass')}
                        </li>
                        <li onClick={onShowReward}>
                          <div className="icon">
                            <Image
                              src={'/images/icons/icon-reward.png'}
                              width={19}
                              height={19}
                              alt=""
                            />
                          </div>
                          {t('rewards')}
                        </li>
                        <li onClick={onShowEcoWallet}>
                          <div className="icon">
                            <Image
                              src={'/images/icons/icon-wallet.png'}
                              width={19}
                              height={19}
                              alt=""
                            />
                          </div>
                          {t('wallet')}
                        </li>
                        <li onClick={onShowSetting}>
                          <div className="icon">
                            <Image
                              src={'/images/icons/icon-support.png'}
                              width={19}
                              height={19}
                              alt=""
                            />
                          </div>
                          {t('support')}
                        </li>
                        <li onClick={handleLogout}>
                          <div className="icon">
                            <Image
                              src={'/images/icons/icon-logout.png'}
                              width={19}
                              height={19}
                              alt=""
                            />
                          </div>
                          {t('logOut')}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="account">
                    <div className="name">{profile?.username}</div>
                    <div className="coin">
                      <Image
                        src="/images/icons/coin.png"
                        width={15}
                        height={15}
                        alt=""
                      />
                      <span>{profile?.coinsEarned?.toFixed(2)}</span>
                    </div>
                  </div>
                  <S.BtnDown className="btn-down">
                    <Image
                      src="/images/icons/dropdown.png"
                      width={15}
                      height={10}
                      alt="down"
                      onClick={handleToggle}
                    />
                  </S.BtnDown>
                </div>
              </S.AccountWrapper>
            ) : (
              ''
            )}
            <S.MenuNavBar>
              <S.MenuNavBarLink className={profile ? 'logged' : ''}>
                <Link href="/" passHref>
                  <div
                    className={`icon ${router.pathname == '/' ? 'active' : ''}`}
                  >
                    <div className="item">
                      <IconHome />
                    </div>
                    <a className="item-link">{t('home')}</a>
                  </div>
                </Link>
              </S.MenuNavBarLink>
              <S.MenuNavBarLink className={profile ? 'logged' : ''}>
                <Link href="/earn" passHref>
                  <div
                    className={`icon ${
                      router.pathname == '/earn' ? 'active' : ''
                    }`}
                  >
                    <div className="item">
                      <IconEarn />
                    </div>
                    <a className="item-link">{t('earn')}</a>
                  </div>
                </Link>
              </S.MenuNavBarLink>
              <S.MenuNavBarLink className={profile ? 'logged' : ''}>
                <Link href="/cashout" passHref>
                  <div
                    className={`icon ${
                      router.pathname == renderCashout ||
                      (renderCashout.includes(router?.pathname) &&
                        renderCashout !== '/')
                        ? 'active'
                        : ''
                    }`}
                  >
                    <div className="item">
                      <IconCashout />
                    </div>

                    <a className="item-link">{t('cashout')}</a>
                  </div>
                </Link>
              </S.MenuNavBarLink>
              <S.MenuNavBarLink
                className={profile ? 'logged' : ''}
                locale={router.locale}
              >
                <Link href="/leaderboard" passHref>
                  <div
                    className={`icon ${
                      router.pathname == '/leaderboard' ? 'active' : ''
                    }`}
                  >
                    <div className="item">
                      <IconLeaderboard />
                    </div>
                    <a className="item-link">{t('leaderboard')}</a>
                  </div>
                </Link>
              </S.MenuNavBarLink>
              <S.MenuNavBarLink className={profile ? 'logged' : ''}>
                <Link href="/rewards" passHref>
                  <div className={'icon'}>
                    <div className="item">
                      <IconReward />
                    </div>
                    <a className="item-link">{t('rewards')}</a>
                    <span>{t('new')}</span>
                  </div>
                </Link>
              </S.MenuNavBarLink>
            </S.MenuNavBar>
          </S.MenuNavBarWrapper>
          {profile ? (
            <S.ListActive>
              <li>
                <div className="icon">
                  <Image
                    src={'/images/icons/icon-profile.png'}
                    width={19}
                    height={19}
                    alt=""
                  />
                </div>
                <Link href="/profile" passHref>
                  <a>{t('profile')}</a>
                </Link>
              </li>
              <li onClick={onShowChangePassword}>
                <div className="icon">
                  <Image
                    src={'/images/icons/icon-key.png'}
                    width={19}
                    height={19}
                    alt=""
                  />
                </div>
                <span>{t('changePass')}</span>
              </li>
              <li onClick={onShowReward}>
                <div className="icon">
                  <Image
                    src={'/images/icons/icon-reward.png'}
                    width={19}
                    height={19}
                    alt=""
                  />
                </div>
                <span>{t('rewards')}</span>
              </li>
              <li onClick={onShowEcoWallet}>
                <div className="icon">
                  <Image
                    src={'/images/icons/icon-wallet.png'}
                    width={19}
                    height={19}
                    alt=""
                  />
                </div>
                <span>{t('wallet')}</span>
              </li>
              <li onClick={onShowSetting}>
                <div className="icon">
                  <Image
                    src={'/images/icons/icon-support.png'}
                    width={19}
                    height={19}
                    alt=""
                  />
                </div>
                <span>{t('support')}</span>
              </li>
              <li onClick={handleLogout}>
                <div className="icon">
                  <Image
                    src={'/images/icons/icon-logout.png'}
                    width={19}
                    height={19}
                    alt=""
                  />
                </div>
                <span>{t('logOut')}</span>
              </li>
            </S.ListActive>
          ) : (
            ''
          )}
        </S.MenuWrapper>
        <S.Backdrop
          onClick={handleOpenMenu}
          className={menuActive === true ? 'active' : ''}
        ></S.Backdrop>
      </S.HeaderWrapper>
      {!menuActive && (
        <S.ListSetting className={profile ? 'loggin' : ''}>
          <Bonus />
          <Help />
          {profile ? (
            <div className="notification" onClick={onShowNotification}>
              <div className="quantity">
                {notification?.length > 99 ? '99+' : notification?.length}
              </div>
              <Image
                src="/images/Notification.png"
                width={50}
                height={50}
                alt=""
              />
            </div>
          ) : (
            ''
          )}
        </S.ListSetting>
      )}
      <S.ButtonLogin>
        {profile
          ? ''
          : !menuActive && (
              <Guest
                onShowSigninModal={onShowSigninModal}
                onShowSignup={onShowSignup}
                t={t}
              />
            )}
      </S.ButtonLogin>
    </>
  )
}

export default Header
