import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 10rem;
`

export const Logo = styled.div`
  height: 17rem;
  background-image: url('/images/bg-empty.png');
  background-repeat: no-repeat;
  background-position: 50%;
`

export const Container = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  color: #f9b938;
  font-size: 2.5rem;
  margin-bottom: 7.4rem;
  margin-top: 2.8rem;
`

export const BackToHome = styled.button`
  color: #8c9abc;
  font-size: 1.8rem;
  background-color: #2e3a59;
  padding: 1.5rem 9rem;
  border-radius: 1rem;
  border: 1px solid #a6adeb;

  &:hover {
    color: #ffffff;
  }
`
