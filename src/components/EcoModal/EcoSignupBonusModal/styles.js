import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: rgba(28, 37, 60, 1);
  width: 90rem;
  border-radius: 8px;
  margin-top: 2rem;

  @media (max-width: 921px) {
    width: 100%;
  }
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const FreeCase = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: -2rem;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 700;

    color: #fff;
    height: 4.9rem;
    width: fit-content;
    white-space: nowrap;
    padding: 0 4rem;
    border-radius: 6px;
    position: absolute;
    z-index: 2;

    background: linear-gradient(
      to right,
      rgba(237, 176, 27, 1),
      rgba(251, 222, 72, 1)
    );
  }
`

export const Image = styled.div`
  text-align: center;
  position: relative;
  top: -5.5rem;
  z-index: 1;
`

export const Title = styled.h1`
  width: fit-content;
  white-space: nowrap;
  margin-bottom: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  position: absolute;
  top: 7rem;
`

export const RewardSlideContainer = styled.div`
  position: relative;
  z-index: 2;
  height: 12.2rem;
  background-color: rgba(9, 18, 39, 1);
  border-top: 2px solid rgba(46, 58, 89, 1);
  border-bottom: 2px solid rgba(46, 58, 89, 1);
  overflow: hidden;

  ul {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    margin-left: 5px;
    overflow: visible;
    white-space: nowrap;
  }

  li {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 10.3rem;
    width: 11.9rem;
    position: relative;
    z-index: 1;

    background-color: rgba(28, 37, 60, 1);
    margin: 0.9rem 0.8rem 1rem 0rem;

    .icon {
      width: 100%;
      height: 4.3rem;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('/images/icons/0.25.png');
    }
    p {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 400;
      margin-bottom: 0;
    }

    span {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 1px;
    }

    &::after {
      content: '';
      position: absolute;
      background: rgba(140, 154, 188, 1);
      width: 100%;
      height: 2px;
      left: 0;
      bottom: 1px;
      border-radius: 0 0 2px 2px;
    }
  }

  .win-size-1 {
    .icon {
      background-image: url('/images/icons/0.25.png');
    }
  }
  .win-size-2 {
    .icon {
      background-image: url('/images/icons/2.5.png');
    }
    &::before {
      content: '';
      z-index: 0;
      background: linear-gradient(
        to bottom,
        rgba(41, 75, 161, 0),
        rgba(41, 75, 161, 1)
      );
      opacity: 0.7;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }

    &::after {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.1)
      );
    }
  }
  .win-size-3 {
    .icon {
      background-image: url('/images/icons/250.png');
    }
    &::before {
      content: '';
      background: linear-gradient(
        rgba(249, 185, 56, 0) 1.35%,
        rgba(249, 185, 56, 1) 100%
      );
      height: 100%;
      width: 100%;
      opacity: 0.7;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }

    &::after {
      background: linear-gradient(
        to right,
        rgba(28, 37, 60, 0.1),
        rgba(249, 185, 56, 1),
        rgba(28, 37, 60, 0.1)
      );
    }
  }
`

export const WinLine = styled.div`
  position: absolute;
  height: 134px;
  top: -2px;
  left: 50%;
  z-index: 2;
  width: 2px;

  box-shadow: 0 4px 14px rgb(0 0 0 / 25%);
  background: rgba(205, 249, 255, 1);

  svg {
    position: absolute;
    top: -1px;
    left: -9px;
    z-index: 999;
  }
`

export const RewardAction = styled.div`
  margin-top: 4rem;

  .wrapper-action-input {
    display: flex;
    justify-content: center;
  }
  .action-input {
    position: relative;
    display: flex;
    justify-content: center;
    margin-right: 3%;

    input {
      background-color: rgba(46, 58, 89, 1);
      height: 4.3rem;
      width: 24rem;
      border: none;
      border-radius: 3px;
      padding: 5px 0 5px 36px;
      font-size: 1.5rem;
      color: #fff;
      box-shadow: inset 0px 5px 2px -3px rgba(28, 37, 60, 1);

      &:focus-visible,
      &:active,
      &:focus {
        border: none !important;
        outline: none !important;
      }

      @media (max-width: 480px) {
        width: 90%;
      }
    }

    svg {
      position: absolute;
      top: 1.5rem;
      left: 1rem;
      z-index: 1;

      @media (max-width: 480px) {
        left: 10%;
      }
    }
    @media (max-width: 480px) {
      margin-right: 0;
    }
  }

  .action-button {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 16rem;
      height: 4.3rem;
      border: 2px solid rgba(255, 236, 139, 1);
      border-radius: 4px;
      background: linear-gradient(
        to top,
        rgba(237, 176, 27, 1),
        rgba(251, 222, 72, 1)
      );
      color: #000;
      font-size: 1.6rem;
      font-weight: 700;

      @media (max-width: 480px) {
        width: fit-content;
        padding: 0 0.5rem;
        font-size: 1.2rem;
        margin-right: 1rem;
        white-space: nowrap;
      }

      @media (max-width: 374px) {
        width: fit-content;
      }
    }
  }
  .des-action {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.4rem 0;
    p {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 400;
      margin-bottom: 0;
      margin-left: 0.8rem;
      text-align: center;
    }
    span {
      color: rgba(249, 185, 56, 1);
    }

    @media (max-width: 450px) {
      p {
        font-size: 1.1rem;
      }
    }
  }
`

export const Bottom = styled.div`
  padding: 0 0.9rem;
  height: 16rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(9, 18, 39, 1);
  }

  .title {
    margin: 0.5rem 0 3rem 0.9rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;

    .icon {
      margin-right: 0.8rem;
      display: flex;
      align-items: center;
      svg {
        width: 10px;
        height: 12px;
        path {
          fill: rgba(237, 176, 27, 1);
        }
      }
    }
    @media (max-width: 450px) {
      font-size: 1.1rem;
    }
  }
`

export const Possible = styled.div`
  border-top: 2px solid rgba(46, 58, 89, 1);
  border-bottom: 2px solid rgba(46, 58, 89, 1);
  .possible-item {
    margin: 0 0.9rem 1.7rem 0.9rem;
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 0;
    }

    .item-1,
    .item-2,
    .item-3,
    .item-4 {
      height: 6.8rem;
      border-radius: 0.6rem;
      min-width: 20rem;
      margin-right: 2%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
      }
    }

    .item-1 {
      border: 1px solid rgba(255, 255, 255, 1);
      div {
        margin-left: 1.7rem;
      }
    }

    .item-2 {
      border: 1px solid rgba(255, 255, 255, 0.7);
      div {
        margin-left: 0.6rem;
      }
    }

    .item-3 {
      border: 1px solid rgba(255, 255, 255, 0.4);
      div {
        margin-left: 1.1rem;
      }
    }

    .item-4 {
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-right: 0;
      div {
        margin-left: 1rem;
      }
    }
    span {
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
      margin-right: 3.2rem;
      letter-spacing: 1px;
    }
  }
`

export const TopWinner = styled.div`
  .title {
    margin: 0.5rem 0 1rem 0.9rem;
  }
`

export const ListItem = styled.div`
  padding: 0 0.9rem;
  margin-bottom: 3rem;
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`

export const Item = styled.div`
  min-width: 14.2rem;
  height: 3.6rem;
  background-color: rgba(255, 255, 255, 0.09);
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-right: 6px;

  .avatar {
    display: flex;
    align-items: center;
    margin-left: 6px;
    span {
      border-radius: 3px;
    }
  }
`

export const WinnerUser = styled.div`
  margin-left: 5px;
  span {
    color: rgba(87, 102, 140, 1);
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0;
  }
  p {
    color: rgba(140, 154, 188, 1);
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0;
  }
`

export const Coin = styled.div`
  margin-left: 1rem;
  width: 3.8rem;
  height: 1.8rem;
  border-radius: 1px;
  background-color: rgba(255, 255, 255, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 600;
    font-size: 1rem;
    position: relative;
    &::before {
      content: '';
      width: 2px;
      height: 1.2rem;
      background-color: rgba(249, 185, 56, 1);
      position: absolute;
      top: 2px;
      right: -5px;
    }
  }
`
