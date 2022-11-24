import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #212c47;
  margin-top: 5rem;
  border-radius: 11px;
  @media (max-width: 1212px) {
    margin-top: 2rem;
  }
  .daily-bonus {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
  .topwins {
    background-color: #1c2439;
    border-radius: 4px;
    padding: 1rem 1rem;
    width: 96%;
    margin: auto;
    margin-bottom: 1rem;
    .title {
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      letter-spacing: 0.3px;
      color: #8c9abc;
      margin-bottom: 2rem;
    }
    .list-user {
      display: flex;
      justify-content: space-evenly;
      .user {
        width: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 0.3rem;
        border: 0.5px solid #ffffff;
        box-sizing: border-box;
        border-radius: 4px;
        margin-bottom: 2rem;
        position: relative;
        img {
          border-radius: 5px !important;
          border: 0.5px solid #ffffff !important;
        }
        @media (max-width: 600px) {
          width: 9rem;
        }
        &:hover {
          cursor: pointer;
        }
        &:first-child {
          background: linear-gradient(
            180deg,
            #ffd541 0%,
            rgba(255, 213, 65, 0) 100%
          );
        }
        &:nth-child(2) {
          background: linear-gradient(
            180deg,
            #8a8a8a 0%,
            rgba(151, 151, 151, 0) 100%
          );
        }
        &:last-child {
          background: linear-gradient(
            180deg,
            #ffa841 0%,
            rgba(255, 179, 65, 0) 100%
          );
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .list-btn {
    background-color: #1c2439;
    padding: 1.5rem;
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .something {
    width: 85%;
    margin: auto;
    margin-bottom: 2rem;
    .level {
      display: flex;
      justify-content: space-between;
      color: #8c9abc;
    }
    .number {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding: 0rem 1rem;
      color: #8c9abc;
      div:first-child {
        color: #ffd541;
      }
    }
    .line {
      width: 100%;
      margin: auto;
      height: 15px;
      background-color: #131b2f;
      border-radius: 30px;
      position: relative;
      color: #131b2f;
      &:before {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 1rem;
        border-top: 10px solid #131b2f;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        right: 1rem;
        border-top: 10px solid #131b2f;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
      }
    }
    .text {
      color: #8c9abc;
      text-align: center;
      margin-top: -2rem;
      font-size: 8px;
    }
  }
`
export const Name = styled.div`
  font-size: 9px;
  overflow: hidden;
  width: 5rem;
`
export const Button = styled.button`
  background: #f9b938;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  padding: 1.5rem;
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 13px;
  &:nth-child(1) {
    margin-right: 1rem;
  }
  @media (max-width: 460px) {
    padding: 1rem 0.5rem;
    font-size: 11px;
    width: 13rem;
  }
`
export const Hr = styled.hr`
  //font-size: 25px;
  color: #131b2f;
  height: 14px;
`
export const Coin = styled.div`
  position: absolute;
  width: 50%;
  border: 0.5px solid white;
  background: linear-gradient(360deg, #edb01b 0%, #fbde48 100%);
  height: 2rem;
  text-align: center;
  top: -1rem;
  right: 0.5rem;
  border-radius: 2px;
  font-size: 9px;
  overflow-x: hidden;
  padding: 0.2rem;
`
export const Bonus = styled.div`
  border-radius: 5px;
  height: 2.8rem;
  width: ${props => (props.width ? props.width : '')}rem;
  background-color: #2e3a59;
  clip-path: polygon(0 0, 100% 0, 96% 100%, 4% 100%);
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #ffffff;
  &:nth-child(1) {
    background: #ffcc4d;
    height: 4.7rem;
    color: #000000;
    font-size: 17px;
    font-weight: bold;
  }
  &:nth-child(2) {
    background: #727392;
    height: 3.6rem;
  }
  &:nth-child(3) {
    background: #fcc065;
  }
  &:nth-child(9) {
    animation: bgcolor1 infinite 0.4s;
    img {
      width: 15px !important;
      height: 8px !important;
    }
  }
  &:nth-child(10) {
    background: #50ff81;
    img {
      width: 5px !important;
      height: 5px !important;
    }
  }
  &:nth-child(11) {
    animation: bgcolor infinite 0.4s;
    img {
      display: none !important;
    }
  }
  @keyframes bgcolor {
    50% {
      background: #f95441;
    }
    100% {
      background: #2e3a59;
    }
  }
  @keyframes bgcolor1 {
    50% {
      background: #2e3a59;
    }
    100% {
      background: #50ff81;
    }
  }
  div {
    margin-left: 0.5rem;
  }
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 15px;
  letter-spacing: 0.3px;
  color: #f9b938;
  padding: 1.5rem;
`
