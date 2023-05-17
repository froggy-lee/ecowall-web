import Image from 'next/image'
import React from 'react'
import * as S from './styles'

function LootablyModal() {
  const data = [
    {
      content: 'Surveys'
    },
    {
      content: 'OneClick'
    },
    {
      content: 'Apps'
    },
    {
      content: 'Videos'
    },
    {
      content: 'Purchases'
    },
    {
      content: 'Quizzes'
    }
  ]
  const dataContent = [
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    },
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    },
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    },
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    },
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    },
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    },
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    },
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    },
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    },
    {
      image: '/images/Earn-page/Eco-Network/img-lootably.png',
      title: 'Take a survey',
      content: 'Get rewards for completing surveys.',
      button: '+170'
    }
  ]
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <h1>Lootably</h1>
          <Image
            src={'/images/Earn-page/Eco-Network/cancel.png'}
            width={20}
            height={20}
            alt=""
          />
        </S.Header>
        <S.Title>
          <Image
            src={'/images/Earn-page/Eco-Network/lootably-icon.png'}
            width={27}
            height={31}
            alt=""
          />
          <h1>Lootably</h1>
        </S.Title>
        <S.WrapperContent>
          <S.Button>
            {data.map((item, idx) => {
              return (
                <li key={idx}>
                  <a>{item.content}</a>
                </li>
              )
            })}
          </S.Button>
          <S.Content>
            <ul>
              {dataContent.map((item, idx) => {
                return (
                  <S.ListContent key={idx}>
                    <Image src={item.image} width={72} height={67} alt="" />
                    <S.ContentMid>
                      <h1>{item.title}</h1>
                      <p>{item.content}</p>
                    </S.ContentMid>
                    <S.ButtonContent>{item.button}C</S.ButtonContent>
                  </S.ListContent>
                )
              })}
            </ul>
          </S.Content>
        </S.WrapperContent>
      </S.Container>
    </S.Wrapper>
  )
}

export default LootablyModal
