import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import * as S from './styles'
import { BASE_API_URL } from '/src/constants'

const Footer = () => {
  const router = useRouter()
  const { t } = useTranslation('footer')
  const { locale } = router
  const [lang, setLang] = useState(locale)
  const [activeMenu, setActiveMenu] = useState(false)

  const changeLanguage = useCallback(
    lang => {
      setLang(lang)
      router.push(router.pathname, router.pathname, {
        locale: lang
      })
    },
    [router]
  )
  const handleActiveMenuLanguage = () => {
    setActiveMenu(!activeMenu)
  }

  const supportLinks = [
    {
      iconUrl: '',
      title: `${t('faq')}`,
      href: '/'
    },
    {
      iconUrl: '',
      title: `${t('contact')}`,
      href: '/'
    }
  ]

  const aboutLinks = [
    {
      iconUrl: '',
      title: `${t('blog')}`,
      href: '/'
    },
    {
      iconUrl: '',
      title: `${t('termsService')}`,
      href: '/static/terms-of-service.html'
    },
    {
      iconUrl: '',
      title: `${t('privacyPolicy')}`,
      href: '/static/privacy-policy.html'
    },
    {
      iconUrl: '',
      title: `${t('howWork')}`,
      href: '/'
    }
  ]

  const socialLinks = [
    {
      iconUrl: '/images/icons/twitter.png',
      title: 'Twitter',
      href: 'https://twitter.com/'
    },
    {
      iconUrl: '/images/icons/facebook.png',
      title: 'Facebook',
      href: 'https://facebook.com/'
    },
    {
      iconUrl: '/images/icons/instagram.png',
      title: 'Instagram',
      href: 'https://instagram.com/'
    }
  ]

  return (
    <S.FooterWrapper>
      <S.FooterSection>
        <S.FooterLogoWrapper>
          <S.FooterLogo>
            <Image
              src="/images/footer-logo.png"
              alt="logo"
              width={32}
              height={28}
            />
          </S.FooterLogo>

          <S.FooterLogoTitle>eco wall</S.FooterLogoTitle>
        </S.FooterLogoWrapper>

        <S.FooterMenuWrapper>
          <S.FooterMenuContainer className="first-child">
            <S.FooterMenuTitle>{t('support')}</S.FooterMenuTitle>
            <S.FooterMenuLinkWrapper>
              {supportLinks.map((item, idx) => (
                <S.FooterMenuLink key={idx}>
                  <Link href={item.href}>{item.title}</Link>
                </S.FooterMenuLink>
              ))}
            </S.FooterMenuLinkWrapper>
          </S.FooterMenuContainer>

          <S.FooterMenuContainer className="second-child">
            <S.FooterMenuTitle>{t('about')}</S.FooterMenuTitle>
            <S.FooterMenuLinkWrapper>
              {aboutLinks.map((item, idx) => (
                <S.FooterMenuLink key={idx}>
                  <Link href={`${BASE_API_URL}${item.href}`}>{item.title}</Link>
                </S.FooterMenuLink>
              ))}
            </S.FooterMenuLinkWrapper>
          </S.FooterMenuContainer>

          <S.FooterMenuContainer className="third-child">
            <S.FooterMenuTitle>{t('social')}</S.FooterMenuTitle>
            <S.FooterMenuLinkWrapper>
              {socialLinks.map((item, idx) => (
                <S.FooterMenuLink key={idx}>
                  <S.IconFooterMenuLink>
                    <Image
                      src={`${item.iconUrl}`}
                      alt="icon"
                      width={20}
                      height={20}
                    />
                  </S.IconFooterMenuLink>
                  <Link href={item.href} passHref>
                    <a target="_blank">{item.title}</a>
                  </Link>
                </S.FooterMenuLink>
              ))}
            </S.FooterMenuLinkWrapper>
          </S.FooterMenuContainer>

          <S.FooterMenuContainer className="last-child">
            <S.FooterMenuTitle>{t('language')}</S.FooterMenuTitle>
            <S.FooterMenuLinkWrapper>
              {lang === 'en' ? (
                <S.FooterMenuLink onClick={handleActiveMenuLanguage}>
                  <S.IconFooterLanguage>
                    <Image
                      src="/images/icons/english.png"
                      alt="icon"
                      width={18}
                      height={18}
                    />
                  </S.IconFooterLanguage>
                  <S.Content>English</S.Content>
                  <S.IconLanguage>
                    <Image
                      src="/images/icons/arrow.png"
                      alt=""
                      width={15}
                      height={9}
                    />
                  </S.IconLanguage>
                </S.FooterMenuLink>
              ) : (
                ''
              )}
              {lang === 'hi' ? (
                <S.FooterMenuLink>
                  <S.IconFooterLanguage>
                    <Image
                      src="/images/icons/indian.png"
                      alt="icon"
                      width={18}
                      height={18}
                    />
                  </S.IconFooterLanguage>
                  <S.Content onClick={handleActiveMenuLanguage}>
                    Indian
                  </S.Content>
                  <S.IconLanguage>
                    <Image
                      src="/images/icons/arrow.png"
                      alt=""
                      width={15}
                      height={9}
                    />
                  </S.IconLanguage>
                </S.FooterMenuLink>
              ) : (
                ''
              )}
              {lang === 'vi' ? (
                <S.FooterMenuLink>
                  <S.IconFooterLanguage>
                    <Image
                      src="/images/icons/vi.png"
                      alt="icon"
                      width={18}
                      height={18}
                    />
                  </S.IconFooterLanguage>
                  <S.Content onClick={handleActiveMenuLanguage}>
                    Vietnamese
                  </S.Content>
                  <S.IconLanguage>
                    <Image
                      src="/images/icons/arrow.png"
                      alt=""
                      width={15}
                      height={9}
                    />
                  </S.IconLanguage>
                </S.FooterMenuLink>
              ) : (
                ''
              )}
              <S.LanguageSelect className={activeMenu ? 'select' : ''}>
                <S.Select>
                  <S.FooterMenuLink
                    onClick={() => changeLanguage('en')}
                    className={lang === 'en' ? 'active' : ''}
                  >
                    <S.IconFooterLanguage>
                      <Image
                        src="/images/icons/english.png"
                        alt="icon"
                        width={18}
                        height={18}
                      />
                    </S.IconFooterLanguage>
                    <Link
                      href="#"
                      locale={router.locale === 'en' ? 'hi' : 'en'}
                      passHref
                    >
                      <S.Content>English</S.Content>
                    </Link>
                  </S.FooterMenuLink>
                  <S.FooterMenuLink
                    onClick={() => changeLanguage('hi')}
                    className={lang === 'hi' ? 'active' : ''}
                  >
                    <S.IconFooterLanguage>
                      <Image
                        src="/images/icons/indian.png"
                        alt="icon"
                        width={18}
                        height={18}
                      />
                    </S.IconFooterLanguage>
                    <Link
                      href="#"
                      locale={router.locale === 'hi' ? 'en' : 'hi'}
                      passHref
                    >
                      <S.Content>Indian</S.Content>
                    </Link>
                  </S.FooterMenuLink>
                  <S.FooterMenuLink
                    onClick={() => changeLanguage('vi')}
                    className={lang === 'vi' ? 'active' : ''}
                  >
                    <S.IconFooterLanguage>
                      <Image
                        src="/images/icons/vi.png"
                        alt="icon"
                        width={18}
                        height={18}
                      />
                    </S.IconFooterLanguage>
                    <Link
                      href="#"
                      locale={router.locale === 'vi' ? 'vi' : 'en'}
                      passHref
                    >
                      <S.Content>Vietnamese</S.Content>
                    </Link>
                  </S.FooterMenuLink>
                </S.Select>
              </S.LanguageSelect>
            </S.FooterMenuLinkWrapper>
          </S.FooterMenuContainer>
        </S.FooterMenuWrapper>

        <S.FooterCopyRightWrapper>
          <div className="reserved">{t('allReserved')}</div>
          <div>{t('copyright')}</div>
        </S.FooterCopyRightWrapper>
      </S.FooterSection>
      <div className="background"></div>
    </S.FooterWrapper>
  )
}

export default Footer
