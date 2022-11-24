import styled from 'styled-components'

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding-top: 5rem;
  height: 100%;
`
export const ContentTop = styled.div`
  margin: 0 auto;
  width: 34rem;
  padding: 0 16px;
  height: 5.8rem;
  background-color: #030d28;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  .circle {
    cursor: pointer;
  }
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0;
  padding-right: 12.8rem;
`
export const ContentBot = styled.div`
  margin: 0 auto;
  width: 34rem;
  background-color: #2e3a59;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 2.5rem 1.8rem 3rem 1.8rem;
`
export const TitleBot = styled.h1`
  font-size: 2.4rem;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
`
export const Content = styled.div`
  padding-top: 1.3rem;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  line-height: 2.4rem;
  color: #ffffff;
  padding-bottom: 1.6rem;
`
export const Midle = styled.div`
  padding: 0 1.5rem 0 2.1rem;
  height: 6.4rem;
  border: 2px solid #f9b938;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  color: #f9b938;
  font-weight: 700;
`
export const Button = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`

export const InputEnterWallet = styled.input`
  padding: 1.6rem 2rem;
  color: #000000;
  font-size: 1.6rem;
  background-color: #ffffff;
  border-radius: 8px;
  border: none;
  margin-bottom: 2rem;
`
export const ButtonSaveWallet = styled.a`
  background-color: #f9b938;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding: 1.6rem 2.6rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: #ffffff !important;
  }

  .icon {
    display: flex;
    align-items: center;
    padding-left: 8px;
  }
`
