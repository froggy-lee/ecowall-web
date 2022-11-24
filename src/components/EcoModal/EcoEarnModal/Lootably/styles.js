import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 10rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  padding-top: 5rem;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
`

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #1c253c;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media (min-width: 900px) {
    width: 774px;
  }
`
export const Header = styled.div`
  padding: 0 2rem;
  background-color: #1c253c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.9rem;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    font-family: 'Inter';
  }
`

export const Title = styled.div`
  height: 5.3rem;
  background-color: #2e3a59;
  display: flex;
  align-items: center;
  padding-left: 1rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 0;
    margin-left: 1rem;
    font-family: 'Inter';
  }

  @media (min-width: 900px) {
    padding-left: 3rem;
  }
`

export const WrapperContent = styled.div`
  background-image: url('/images/Earn-page/Surveys/bg.png');
  padding: 8px;
  overflow-y: scroll;
  width: 100%;

  @media (min-width: 900px) {
    padding: 1.5rem 3rem;
  }
`

export const Button = styled.ul`
  display: flex;
  height: 3.3rem;
  margin-bottom: 1.6rem;
  overflow-x: scroll;
  li {
    text-decoration: none;
    border: 1px solid #f9b938;
    margin-right: 6px;
    border-radius: 4px;
    padding: 8px 10px;
    &:hover {
      background-color: #f9b938;
    }

    a {
      font-size: 1.1rem;
      line-height: 1.5rem;

      align-items: center;
      font-weight: 500;
      &:hover {
        color: #ffffff !important;
      }
    }
  }
`

export const Content = styled.div`
  height: 30rem;
`

export const ListContent = styled.div`
  padding: 0.5rem 1rem;
  background-color: #fff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  border-radius: 8px;

  @media (min-width: 900px) {
    padding: 1.1rem 4rem 1.1rem 2.4rem;
  }
`

export const ContentMid = styled.div`
  color: #000;
  margin-left: 0.6rem;
  flex: 1 1 50%;

  h1 {
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 0;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0;
  }

  @media (min-width: 900px) {
    margin-left: 1.4rem;
  }
`

export const ButtonContent = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  background-color: #f9b938;
  margin-left: 4px;
  padding: 0.6rem 1.4rem;
  border-radius: 3px;
`
