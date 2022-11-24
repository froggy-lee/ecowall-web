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
  margin-bottom: 0px;
  padding-right: 7rem;
`
export const ContentBot = styled.div`
  width: 34rem;
  margin: 0 auto;
  padding: 2.9rem 1.2rem 2.6rem 1.2rem;
  display: flex;
  flex-direction: column;
  background-color: #2e3a59;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`
export const Container = styled.div`
  a {
    cursor: pointer;
    padding-left: 2.5rem;
    padding-right: 1.6rem;
    height: 5.6rem;
    background-color: #f9b938;
    display: flex;
    align-items: center;
    border-radius: 3px;
    margin-bottom: 9px;
    .arrow,
    .icon {
      display: flex;
      align-items: center;
    }
  }
`
export const Icon = styled.div``
export const Content = styled.p`
  width: 23.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 0px;
  padding-left: 8px;
`
