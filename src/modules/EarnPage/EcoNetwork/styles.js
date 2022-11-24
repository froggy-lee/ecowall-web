import styled from 'styled-components'

export const WrapperEcoNetwork = styled.div`
  color: #ffffff;
  padding: 2.5rem 1.6rem 0 1.6rem;
  width: 100%;
  background-color: url('/images/Earn-page/Eco-Network/bg.png');
  background-position: 50%;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    padding: 2.5rem 3.3rem 0 3.3rem;
  }
`
export const ContentTop = styled.div`
  padding-bottom: 1.7rem;
`

export const Title = styled.h1`
  background-image: linear-gradient(to top, #edb01b, #fbde48);
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 2.3rem;
  font-weight: 700;
  border-left: 5px solid;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: '';
    background-image: linear-gradient(to top, #edb01b, #fbde48);
    width: 0.5rem;
    height: 100%;
    position: absolute;
    left: -0.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.7rem;
    line-height: 4.1rem;
  }
`

export const Content = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  padding-top: 1rem;
  width: 85%;

  @media (min-width: 868px) {
    width: 70%;
  }
`

export const ContentBot = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-image: url('/images/Earn-page/Eco-Network/bg.png');
  background-position: 50% 15%;
  background-repeat: no-repeat;
  position: relative;
  justify-content: space-between;

  @media (min-width: 1024px) {
    background: none;
  }

  @media (min-width: 415px) {
    justify-content: inherit;
  }
  .icon-box1,
  .icon-box {
    margin: auto 0.5rem;
    width: 233px;
    height: 128px;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
    position: relative;
    margin-bottom: 1.3rem;
    padding: 0.5rem;
    @media (min-width: 415px) {
      width: 165px;
      height: 90px;
      margin-right: 1rem;
      img {
        width: 70% !important;
        height: 70% !important;
      }
    }

    @media (min-width: 1024px) {
      width: 234px;
      height: 128px;
      margin-right: 4.4rem;
      margin-bottom: 4.3rem;
      img {
        width: 100% !important;
        height: 100% !important;
      }
    }

    @media (max-width: 374px) {
      width: 46%;
    }
  }
  .icon-box {
    background: linear-gradient(
      180deg,
      rgba(108, 120, 182, 0) 0%,
      rgba(255, 46, 0, 0.44) 100%
    );
  }
  .icon-box1 {
    background: linear-gradient(
      180deg,
      rgba(108, 120, 182, 0) 0%,
      rgba(0, 102, 255, 0.44) 100%
    );
  }

  @media (min-width: 1024px) {
  }
`

export const Bonus = styled.div`
  font-size: 6px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 8px;
  right: 14px;
  background-color: #2e3a59;
  padding: 0 6px;
  line-height: 1.4rem;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px #000000;

  @media (min-width: 1024px) {
    font-size: 1rem;
    line-height: 1.8rem;
    top: 15px;
    right: 13px;
  }
`

export const WrapperPopularity = styled.div`
  position: absolute;
  width: 100%;
  top: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PopularityText = styled.div`
  font-size: 7px;

  @media (min-width: 1024px) {
    font-size: 8px;
    padding-bottom: 5px;
  }
`

export const Progress = styled.div`
  width: 7.4rem;
  height: 2px;
  background-color: #8c9abc;
  margin: 3px 0 0 0;
  position: relative;
  display: block;
  border-radius: 2px;

  @media (min-width: 1024px) {
    width: 10.4rem;
    height: 4px;
  }
`

export const Determinate = styled.div`
  position: absolute;
  background-color: #ffaa00;
  height: 2px;
  border-radius: 2px;
  width: ${props => (props.percent ? `${props.percent}%` : '0%')};

  @media (min-width: 1024px) {
    height: 4px;
  }
`
