import styled from 'styled-components'

export const Wrapper = styled.div`
  /* padding: 0rem 3rem 6rem 2rem; */
  /* display: flex;
  flex-direction: column; */
  padding: 5rem 1.8rem;

  @media (min-width: 1024px) {
    display: flex;
    margin: 0 auto;
    padding: 8rem 0;
    width: 60%;
  }
`

export const Banner = styled.div`
  background-image: url('/images/bg-banner-bot-mobile.png');
  background-repeat: no-repeat;
  width: 100%;
  height: 25.5rem;
  background-position: 50%;
  position: relative;

  @media (min-width: 1024px) {
    background-size: contain;
    height: 41rem;
  }
`
export const WrapperTitle = styled.div``
export const Title = styled.h1`
  padding-top: 6.5rem;
  color: #ffffff;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 0;

  @media (min-width: 1024px) {
    padding-top: 12.5rem;
    font-size: 1.8rem;
  }
`

export const Money = styled.p`
  background: linear-gradient(360deg, #febc1c 30%, #ffe494 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-size: 6.1rem;
  font-weight: 600;
  text-align: center;

  @media (min-width: 1100px) {
    font-size: 8.2rem;
  }
`

export const Container = styled.div`
  padding-top: 3.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2%;
  }
`
export const Des = styled.p`
  color: #ffffff;
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 600;
  height: 9rem;
  padding-bottom: 1.5rem;
`
export const Button = styled.a`
  margin: 0 auto;
  color: #000000;
  background: linear-gradient(360deg, #edb01b 0%, #fbde48 100%);
  padding: 1.55rem 4.6rem;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 600;

  &:hover {
    color: #000000 !important;
  }

  @media (min-width: 1100px) {
    font-size: 1.6rem;
    padding: 1.3rem 6.5rem;
  }
`
