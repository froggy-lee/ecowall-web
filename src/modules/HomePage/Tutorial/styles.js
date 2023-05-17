import styled from 'styled-components'

export const TutorialWrapper = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 1023px) {
    width: 100%;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.7rem;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.4px;
    color: #ffffff;
    position: relative;
    width: 30rem;
    margin: auto;
    @media (max-width: 1023px) {
      font-size: 1.9rem;
    }
    .background {
      position: absolute;
      top: -7.5rem;
      left: 7rem;
      @media (max-width: 1023px) {
        width: 9.5rem;
        height: 11rem;
        top: -1rem;
        left: 10rem;
      }
    }
  }
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.4px;
    color: #e9e9e9;
    opacity: 0.58;
    margin-bottom: 3rem;

    @media (max-width: 1023px) {
      width: 30rem;
      margin: auto;
      margin-bottom: 3rem;
      margin-top: 1rem;
    }
  }
  .title {
    margin-bottom: 7rem;
    @media (max-width: 1023px) {
      margin-bottom: 2rem;
    }
  }
  .list-picture {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      div {
        margin-bottom: 3rem;
      }
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export const Button = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #000000;
  background: linear-gradient(101.45deg, #edb01b 0%, #fbde48 100%);
  border: 1px solid #fff7ae;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 1.5rem 2.1rem;

  @media (max-width: 1023px) {
    padding: 2.3rem 6.5rem;
    margin-bottom: 2rem;
  }
`
