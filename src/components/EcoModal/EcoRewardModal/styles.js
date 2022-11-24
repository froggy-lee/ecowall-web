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
  position: relative;

  .circle {
    cursor: pointer;
  }
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0;
  position: absolute;
  left: 5rem;
  width: fit-content;
`

export const ContentBot = styled.div`
  margin: 0 auto;
  width: 34rem;
  background-color: #2e3a59;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 0.9rem 1.2rem 3.8rem 1.2rem;
  text-align: center;
`

export const Content = styled.div`
  width: 30rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0 auto;
  padding-top: 1rem;
  line-height: 2rem;
`

export const Button = styled.div`
  padding-top: 2.8rem;
  display: flex;
  justify-content: center;
`

export const ButtonBack = styled.a`
  white-space: nowrap;
  width: 15rem;
  padding: 1.5rem 4.7rem 1.5rem 3rem;
  font-size: 1.6rem;
  background-color: #030d28;
  color: #8c9abc;
  border-radius: 3px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-right: 1.2rem;

  div {
    display: flex;
    padding-right: 10px;
  }

  &:hover {
    background-color: #f9b938;
    color: #ffffff !important;
    cursor: pointer;
    .icon-arrow {
      filter: brightness(200%);
    }
  }
`
export const ButtonContinue = styled.a`
  width: 15rem;
  font-size: 1.6rem;
  background-color: #030d28;
  color: #8c9abc;
  border-radius: 3px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    padding-right: 10px;
    display: flex;
    transform: rotate(180deg);
  }

  &:hover {
    background-color: #f9b938;
    color: #ffffff !important;
    cursor: pointer;
    .icon-arrow {
      filter: brightness(200%);
    }
  }
`
