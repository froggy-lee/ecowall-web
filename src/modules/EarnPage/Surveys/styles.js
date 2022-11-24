import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0rem 1.6rem 5rem 1.6rem;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 0rem 3.3rem 5rem 3.3rem;
    background-image: none;
  }
`

export const ContentTop = styled.div`
  width: 90%;
`

export const Title = styled.h1`
  background-image: linear-gradient(to top, #edb01b, #fbde48);
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.3rem;
  font-weight: 700;
  position: relative;
  padding-left: 1.6rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #f9b938;
    position: absolute;
    border-radius: 50%;
    left: 0;
    top: 40%;

    @media (min-width: 1024px) {
      width: 5px;
      height: 41px;
      border-radius: 0;
      top: -14%;
    }
  }

  @media (min-width: 1024px) {
    padding-bottom: 10px;
    font-size: 2.7rem;
  }
`

export const Content = styled.div`
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: 0.3px;
  word-wrap: break-word;
`

export const ContentBot = styled.div`
  padding-top: 1.7rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const ImageTop = styled.div`
  position: relative;
  margin-bottom: 3rem;

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-right: 2.1rem;
  }
`

export const ImageBot = styled.div``

export const WrapperPopularity = styled.div`
  position: absolute;
  width: 26.9rem;
  top: 57%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PopularityText = styled.div`
  font-size: 7px;
  color: #ffffff;
  font-weight: 400;
`

export const Progress = styled.div`
  width: 7.4rem;
  height: 2px;
  background-color: #8c9abc;
  margin: 3px 0 0 0;
  position: relative;
  display: block;
  border-radius: 2px;
`

export const Determinate = styled.div`
  position: absolute;
  background-color: #ffaa00;
  height: 2px;
  border-radius: 2px;
  width: ${props => (props.width ? `${props.width}%` : '0%')};
`
