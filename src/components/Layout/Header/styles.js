import styled from 'styled-components'

// Header ---------------------------
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem 0rem 1rem;
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  height: 6.5rem;
  background: ${({ theme }) => theme.mainBg};
  @media screen and (min-width: 1111px) {
    position: fixed;
    width: 100%;
    padding: 0rem;
    height: 10rem;
  }
`

export const HambugerIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 1111px) {
    display: none;
  }
  .menu {
    display: flex;
    align-items: center;
    .menu-avatar {
      img {
        border-radius: 50%;
      }
    }
  }
`

export const HambugerIcon = styled.div`
  display: inline-block;
  width: 4rem;
  height: 2.5rem;
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 0.5s;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 0.2rem;
    background: ${({ theme }) => theme.main};
  }

  &:before {
    width: 2rem;
    top: 0.5rem;
  }

  &:after {
    width: 1.6rem;
    bottom: 0.5rem;
  }

  span {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.2rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.main};
  }
`

// Menu ---------------------------
export const MenuWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  min-width: 350px;
  transition: all 0.2s;
  &.active {
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    padding: 2rem;
    background: ${({ theme }) => theme.mainBg};
    overflow-y: scroll;
    visibility: visible;
    opacity: 1;
    transition: all 0.5s;
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(9, 18, 39, 1);
    }
  }
  @media screen and (min-width: 1111px) {
    visibility: visible;
    opacity: 1;
    display: grid;
    grid-template-columns: 17rem 1fr;
    position: relative;
    width: 95%;
    margin: auto;
    max-width: 100%;
  }
`

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: -2rem;
    z-index: 999;
    width: calc(100% + 4rem);
    height: 0.1rem;
    background: #57668c;
    @media screen and (min-width: 1111px) {
      display: none;
    }
  }
`

export const LogoIcon = styled.div`
  pointer-events: none;
  @media screen and (min-width: 1111px) {
    background-image: url('/images/footer-logo.png');
    background-size: cover;
    width: 25px;
    height: 25px;
    margin-top: -0.5rem;
  }
`

export const LogoTitle = styled.h1`
  pointer-events: none;
  font-size: 2.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #74603a;
  margin: 0;
  margin-left: 1rem;
  @media screen and (min-width: 1111px) {
    color: ${({ theme }) => theme.main};
  }
`

export const MenuNavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  @media screen and (min-width: 1111px) {
    flex-direction: ${props => (props.profile ? 'row-reverse' : 'row')};
    justify-content: space-between;
    margin: 0;
  }
`

export const MenuNavBar = styled.ul`
  @media screen and (min-width: 1111px) {
    margin-top: 0;
    display: flex;
    flex-direction: row;
    position: relative;
    left: 0;
  }
`

export const MenuNavBarLink = styled.li`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  margin-right: 2.5rem;

  .icon {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    margin-left: 0.5rem;

    cursor: pointer;
    position: relative;
    z-index: 99;

    a {
      color: #8c9abc;
      margin-left: 5px;
      font-weight: 600;

      @media (max-width: 1111px) {
        margin-left: 1.2rem;
      }
    }

    .item {
      position: relative;
      z-index: -1;
      pointer-events: none;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &:hover {
    .icon {
      svg {
        fill: #f9b938;
        transition: transform 1s;
        transform: rotate(360deg);

        path {
          fill: #f9b938;
        }

        &:first-child {
          stroke: #f9b938;
          fill: none;
          path {
            stroke: #f9b938;
            fill: none;
          }
        }

        &:last-child {
          fill: none;
          path {
            fill: none;
          }
        }
      }
      .item-link {
        color: #f9b938 !important;
      }
    }
  }
  .icon {
    &.active {
      svg {
        fill: #f9b938;
        path {
          fill: #f9b938;
        }

        &:first-child {
          stroke: #f9b938;
          fill: none;
          path {
            stroke: #f9b938;
            fill: none;
          }
        }

        &:last-child {
          fill: none;
          path {
            fill: none;
          }
        }
      }
      .item-link {
        color: #f9b938;
      }
    }
  }

  &:nth-child(1) {
    @media screen and (min-width: 1111px) {
      display: none;
    }
    &.logged {
      display: none;
    }
  }

  &:nth-child(4) {
    position: relative;
    &:after {
      content: '$10,000 Easter';
      padding: 0.1rem 0.4rem;
      background: rgba(249, 185, 56, 0.2);
      color: ${({ theme }) => theme.main};
      white-space: nowrap;
      border-radius: 2.5rem;
      margin-left: 1.5rem;
      @media screen and (min-width: 1111px) {
        position: absolute;
        top: 0.8rem;
        right: -5%;
        font-size: 8px;
        margin-left: 0;
      }
    }
  }
  &:nth-child(5) {
    background: linear-gradient(101.45deg, #edb01b30 0%, #fbde4830 100%);
    padding: 1.5rem;
    border-radius: 6px;
    margin: 1rem 0;
    position: relative;
    white-space: nowrap;

    a {
      color: ${({ theme }) => theme.main};
    }

    span {
      position: absolute;
      top: -1.2rem;
      right: -5px;
      font-size: 1rem;
      font-weight: 700;
      color: #f9b938;
    }

    .icon {
      svg {
        width: 30px;
        height: 20px;
      }
    }

    @media (max-width: 1111px) {
      width: fit-content;
      padding: 1.2rem;
      display: flex;
      margin-left: -0.4rem;
      .icon {
        margin-left: -0.4rem;
        svg {
          width: 20px;
          height: 20px;
        }
      }
      span {
        font-size: 8px;
        top: -0.8rem;
      }
    }
  }
`

// Sign in / Sign up ---------------------------
export const SignWrapper = styled.div`
  /* color:${({ theme }) => theme.main};
    width: 40%;
    gap: 0.8rem */
`

export const SignButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  padding: 1rem 0rem;
  border: none;
  border-radius: 0.5rem;
  background: ${props => (props.signin ? '#57668C' : '#F9B938')};
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;

  @media (min-width: 1111px) {
    width: 11rem;
    padding: 1.2rem 0.2rem;
  }
  img {
    padding-right: 0.5rem !important;
  }
`

// Backdrop ---------------------------
export const Backdrop = styled.div`
  display: none;
  transition: all 0.5s;

  &.active {
    display: block;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
  }
`

// Account-----------------------
export const ListSetting = styled.div`
  display: none;
  &.loggin {
    display: flex;
    position: fixed;
    z-index: 2;
    top: 8px;
    right: 1rem;
    @media (min-width: 1111px) {
      top: 2.5rem;
      right: 10rem;
    }
  }
  span:hover {
    cursor: pointer;
  }

  .eco-wallet,
  .eco-reward,
  .eco-setting {
    margin-right: 1rem;
  }
  .notification {
    position: relative;
    .quantity {
      position: absolute;
      z-index: 2;
      text-align: center;
      background-color: red;
      color: #ffffff;
      width: 2.5rem;
      border-radius: 50%;
      line-height: 2.5rem;
      top: -1rem;
      right: -0.5rem;
    }
  }
  .help {
    background: linear-gradient(
      to top,
      rgba(227, 160, 29, 1),
      rgba(255, 211, 99, 1)
    );
    border-radius: 3rem;
    display: flex;
    align-items: center;
    margin-right: 2rem;
    margin-bottom: 0.5rem;
    width: 11.6rem;
    cursor: pointer;
    position: relative;

    &.hide {
      display: none;
    }

    .language {
      font-size: 1.2rem;
      margin: 0 1rem 0 0.5rem;
    }

    @media (max-width: 500px) {
      margin-right: 1.2rem;
      width: 10.2rem;

      .language {
        font-size: 1rem;
        margin: 0 1rem 0 0.5rem;
      }
      .cancel-help {
        right: -0.9rem;
      }
    }
  }
  .bonus {
    margin-bottom: 5px;
  }
`

export const ListActive = styled.ul`
  position: relative;
  top: -2rem;
  &::before {
    content: '';
    width: calc(100% + 8.2rem);
    height: 1px;
    background-color: rgba(87, 102, 140, 1);
    position: absolute;
    left: -20%;
    top: 1rem;

    @media (min-width: 1111px) {
      content: none;
    }
  }
  li {
    display: flex;
    align-items: center;
    margin: 2.5rem 0;

    .icon {
      margin-left: 0.5rem;
      margin-right: 1.2rem;
      display: flex;
      align-items: center;
      width: 1.7rem;
      height: 1.7rem;
      &:hover {
        cursor: pointer;
      }
    }

    span,
    a {
      color: rgba(140, 154, 188, 1);
      font-size: 1.4rem;
      font-weight: 600;
      &:hover {
        cursor: pointer;
      }
    }

    &:last-child {
      position: relative;

      &::before {
        content: '';
        width: calc(100% + 8.2rem);
        height: 1px;
        background-color: rgba(87, 102, 140, 1);
        position: absolute;
        left: -20%;
        top: -1.2rem;

        @media (min-width: 1111px) {
          content: none;
        }
      }
    }
    &:hover {
      .icon {
        span {
          transition: transform 1s;
          transform: rotate(360deg);
        }
      }
    }
  }

  @media (min-width: 1111px) {
    display: none;
  }
`

export const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  .account-user {
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      content: '';
      width: calc(100% + 13rem);
      height: 1px;
      background-color: rgba(87, 102, 140, 1);
      position: absolute;
      left: -20%;
      bottom: -15px;

      @media (min-width: 1111px) {
        content: none;
      }
    }
  }
  .avatar {
    width: 5rem;
    height: 5rem;
    margin-right: 0.5rem;
    .no-avatar {
      border-radius: 50%;
    }
    &:hover {
      cursor: pointer;
    }
    .level {
      position: absolute;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      background-image: url('/images/LeaderBoard/level.png');
      background-repeat: no-repeat;
      background-size: cover;
      top: -0.5rem;
      margin-left: 3rem;
      color: white;
      @media (min-width: 1111px) {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    .drop-down {
      position: absolute;
      background-color: #2f3a55;
      color: #ffffff;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 15px;
      text-align: left;
      letter-spacing: 0.3px;

      width: 21.5rem;
      top: 5.5rem;
      right: 0;
      border-radius: 4px;
      border: 0.5px solid rgba(87, 102, 140, 1);
      visibility: hidden;
      opacity: 0;
      transform: translateY(-2em);
      z-index: -1;
      transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
        z-index 0s linear 0.01s;

      li {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        color: rgba(140, 154, 188, 1);

        a {
          color: rgba(140, 154, 188, 1);
        }

        .icon {
          margin-right: 1rem;
        }

        &:hover {
          a {
            color: rgba(140, 154, 188, 1) !important;
          }

          .icon {
            transition: transform 1s;
            transform: rotate(360deg);
          }
        }
      }

      li:last-child {
        border-top: 1px solid rgba(227, 227, 227, 0.11);
      }
      li:first-child {
        border-bottom: 1px solid rgba(227, 227, 227, 0.11);
      }

      .account-user {
        display: flex;
        align-items: center;
        position: relative;

        &::before {
          content: '';
          width: 132%;
          height: 1px;
          background-color: rgba(87, 102, 140, 1);
          position: absolute;
          left: -20%;
          bottom: -15px;

          @media (min-width: 1111px) {
            content: none;
          }
        }
        .avatar-user {
          width: 4.7rem;
          height: 4.7rem;
          margin-right: 0.5rem;
          .no-avatar {
            border-radius: 50%;
          }
          &:hover {
            cursor: pointer;
          }
          .level-user {
            position: absolute;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            background-image: url('/images/LeaderBoard/level.png');
            background-repeat: no-repeat;
            background-size: cover;
            top: -0.5rem;
            margin-left: 3rem;
            color: white;
            font-size: 1rem;
            @media (min-width: 1111px) {
              position: absolute;
              top: 0;
              right: 9.6rem;
            }
          }
        }
        .profile-user {
          .name-user {
            font-style: normal;
            font-weight: 600;
            font-size: 1.6rem;
            line-height: 15px;
            letter-spacing: 0.3px;
            color: #ffffff;
            width: 9.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-bottom: 0.3rem;
            @media (max-width: 1111px) {
              width: 19rem;
            }
          }
          .coin-user {
            width: 9.5rem;
            margin-top: 0.5rem;
            background: #030d28;
            border-radius: 2px;
            font-size: 11px;
            display: flex;
            padding: 0.5rem 0.5rem;
            color: ${({ theme }) => theme.main};
            &:hover {
              cursor: pointer;
            }
            span {
              margin: 0 1rem;
            }
          }
        }
      }
    }

    @media (min-width: 1111px) {
      &:hover .drop-down,
      &:focus-within .drop-down,
      &:focus .drop-down {
        visibility: visible;
        opacity: 1;
        z-index: 1;
        transform: translateY(0%);
        transition-delay: 0s, 0s, 0.3s;
      }
    }
  }
  .account {
    display: flex;
    flex-direction: column;
    padding-right: 0.5rem;
    .name {
      font-style: normal;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 15px;
      letter-spacing: 0.3px;
      color: #ffffff;
      width: 9.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 0.3rem;
      @media (max-width: 1111px) {
        width: 19rem;
      }
    }
    .coin {
      width: 9.5rem;
      margin-top: 0.5rem;
      background: #030d28;
      border-radius: 2px;
      font-size: 11px;
      display: flex;
      padding: 0.5rem 0.5rem;
      color: ${({ theme }) => theme.main};
      &:hover {
        cursor: pointer;
      }
      span {
        margin: 0 1rem;
      }
    }

    @media (min-width: 1111px) {
      display: none;
    }
  }
  .btn-login {
    display: flex;
    .sign-in {
      margin-right: 1rem;
    }
  }
`

export const BtnDown = styled.div`
  display: none;
  &:hover {
    cursor: pointer;
  }
`

export const Store = styled.div`
  position: relative;
  margin-top: 5rem;
  @media screen and (min-width: 1111px) {
    display: none;
  }
  .line {
    position: absolute;
    height: 1px;
    width: 115%;
    top: 0;
    left: -2rem;
    background-color: rgba(87, 102, 140, 1);
  }
  .eco-modal {
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 2rem;
    .eco-reward {
      margin: 0 1rem;
    }
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    text-indent: 1px;
    color: ${({ theme }) => theme.main};
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .store {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      padding-top: 1rem !important;
    }
  }
`
export const Logout = styled.div`
  position: absolute;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  cursor: pointer;
  /* identical to box height, or 115% */
  top: 80rem;
  left: 2rem;
  letter-spacing: 0.3px;
  /* a */
  color: #8c9abc;
  display: flex;
  align-items: center;
  padding-bottom: 3rem;
  @media screen and (min-width: 1111px) {
    display: none;
  }
  .logout {
    margin-left: 1rem;
  }
`

export const ButtonLogin = styled.div`
  position: fixed;
  z-index: 2;
  top: 1.5rem;
  right: 1rem;
  @media (min-width: 1111px) {
    top: 2.5rem;
  }

  @media (max-width: 500px) {
    .language {
      width: 9.7rem;
      font-size: 1.1rem;
    }
  }
  .btn-login {
    display: flex;
    .sign-in {
      margin-right: 0.6rem;
    }
    .help {
      width: fit-content;
      background: linear-gradient(
        to top,
        rgba(227, 160, 29, 1),
        rgba(255, 211, 99, 1)
      );
      border-radius: 3rem;
      display: flex;
      align-items: center;
      margin-right: 2rem;
      position: relative;
      cursor: pointer;
      &.hide {
        display: none;
      }
      .cancel-help {
        right: -1.1rem;
        top: 1.2rem;
      }

      @media (min-width: 1111px) {
        .cancel-help {
          right: -1.1rem;
          top: 1.4rem;
        }
      }
      @media (max-width: 500px) {
        margin-right: 1rem;
        width: 10.3rem;
        .cancel-help {
          top: 1.2rem;
          right: -0.8rem !important;
        }
      }
    }
  }
`

export const Help = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0;
    margin: 0 2rem 0 1.5rem;
  }

  .language {
    font-size: 1.2rem;
    margin: 0 1rem 0 0.35rem;
  }
  .cancel-help {
    position: absolute;
    right: -8px;
    top: 15px;
    cursor: pointer;
  }
  .icon-help {
    margin-left: 5px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.74rem;
      margin-left: 1rem;
    }
    .language {
      font-size: 1rem;
    }
    .icon-help {
      width: 3rem;
      height: 3rem;
    }
    .cancel-help {
      top: 1.5rem;
      right: -1.2rem;
    }
  }
`

export const WrapperBonus = styled.div`
  background: linear-gradient(to top, #edb01b 0%, #fbde48 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  margin-right: 1.5rem;
  position: relative;
  width: 12rem;
  cursor: pointer;
  .icon {
    position: absolute;
    left: -1.8rem;
    top: 5px;
  }

  @media (max-width: 500px) {
    margin-right: 1rem;
    width: 10.6rem;
    .icon {
      left: -1.4rem;
    }
  }

  @media (max-width: 430px) {
    margin-right: 0.8rem;
  }
`

export const DesBonus = styled.div`
  text-align: center;

  h1 {
    color: #fff;
    font-size: 1.22rem;
    font-weight: 700;
    margin-bottom: 2px;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0;
  }

  @media (max-width: 500px) {
    margin-left: 1rem;
    h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.82rem;
    }
  }
`
