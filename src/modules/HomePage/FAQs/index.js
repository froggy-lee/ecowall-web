import React from 'react'
import Accordion from './accordion'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

const FAQsSection = () => {
  const { t } = useTranslation('homepage')

  const accordion = [
    {
      title: `${t('howTo')}`,
      content: `${t('howToContentlineone')}
              <br/>
              ${t('howToContentlinetwo')}
              <br/>
              ${t('howToContentlinethree')}
              <br/><br/>
              ${t('howToContentlinefour')}`
    },
    {
      title: `${t('howMuch')}`,
      content: `${t('howMuchContent')}`
    },
    {
      title: `${t('howLong')}`,
      content: `${t('howLongContent')}`
    }
  ]
  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <S.Title>{t('faq')}</S.Title>
      </S.WrapperTitle>
      <S.WrapperMenuContent>
        {accordion.map((item, index) => {
          return (
            <div key={index}>
              <Accordion title={item.title} content={item.content} />
            </div>
          )
        })}
      </S.WrapperMenuContent>
    </S.Wrapper>
  )
}

export default FAQsSection
