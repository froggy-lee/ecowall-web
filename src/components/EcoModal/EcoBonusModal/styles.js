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
  padding-right: 15.8rem;
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
  padding-bottom: 1rem;
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Twitter = styled.div`
  margin: 0 2rem;
`

export const Input = styled.input`
  width: 31.3rem;
  padding: 1rem 2rem;
  color: #fff;
  font-size: 1.6rem;
  background-color: rgba(3, 13, 40, 1);
  border: none;
  margin-bottom: 3rem;
  margin-top: 1.3rem;
`

export const Claim = styled.button`
  border: none;
  padding: 1rem 7.8rem;
  font-size: 1.6rem;
  color: #fff;
  background-color: rgba(249, 185, 56, 1);
  border-radius: 3px;

  &:hover {
    color: #fff !important;
  }
`
