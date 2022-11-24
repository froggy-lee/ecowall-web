import styled from 'styled-components'

export const WrapperModal = styled.div``

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 3;
`

export const Wrapper = styled.div`
  background-color: #1c253c;
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 4;

  &.openModal {
    display: block;
  }

  @media (min-width: 415px) {
    width: 37.5rem;
    height: 50rem;
    right: 5%;
    top: 6.5rem;
    box-shadow: 1px 1px 4px #000000;
    border-radius: 16px;
    background-color: #425074;
  }

  @media (min-width: 1111px) {
    top: 8.5rem;
    right: 9%;
  }

  @media (min-width: 1500px) {
    right: 7%;
  }

  @media (min-width: 1900px) {
    right: 5.5%;
  }
`

export const Head = styled.div`
  padding: 1.6rem 0rem;
  border-bottom: 1px solid #f9b938;
`

export const WrapperHead = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.8rem;

  @media (min-width: 415px) {
    justify-content: space-between;
  }
`
export const Arrow = styled.div`
  cursor: pointer;

  @media (min-width: 415px) {
    display: none;
  }
`

export const Setting = styled.div`
  padding: 0 1.1rem;

  @media (min-width: 415px) {
    display: none;
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0;
  }
`

export const AllRead = styled.div`
  display: none;
  cursor: pointer;
  p {
    font-size: 12px;
    color: #f9b938;
    margin-bottom: 0;
  }

  @media (min-width: 415px) {
    display: block;
  }
`
export const Content = styled.div`
  padding: 0 1.8rem;
  overflow-y: scroll;
  height: 40rem;
  ::-webkit-scrollbar {
    width: 0;
  }
  .infinite-scroll-component {
    ::-webkit-scrollbar {
      width: 0;
    }
  }

  .text {
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
    p {
      font-size: 12px;
      color: #f9b938;
      margin-bottom: 0;
      cursor: pointer;
    }

    @media (min-width: 415px) {
      display: none;
    }
  }
`

export const WrapperContent = styled.div`
  border-bottom: 0.5px solid #8f8f8f;
  padding-bottom: 4px;
  display: flex;
  padding-top: 10px;
  .read {
    opacity: 0.5;
  }
`

export const Avatar = styled.div`
  margin-right: 1.8rem;
  .avatar {
    border-radius: 50%;
    width: 5.3rem;
    height: 5.3rem;
    background-color: #fff;
  }
`

export const Des = styled.div`
  .title {
    width: 24.5rem;
    font-size: 1.2rem;
    color: #fff;
    font-weight: 500;
    margin-bottom: 0;
    line-height: 2rem;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 415px) {
      width: 100%;
    }
  }

  .body {
    width: 24.5rem;
    font-size: 1rem;
    color: #fff;
    margin-bottom: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 300;
  }

  .time {
    font-size: 8px;
    color: #f9b938;
  }

  @media (min-width: 415px) {
    width: 85%;
  }
`

export const More = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .dropdown {
    .btn-success {
      background: none;
      border: none;

      &:focus,
      &:hover,
      &:active {
        border: none;
      }
    }
    .dropdown-menu {
      padding: 0;
      background-color: rgba(46, 58, 89, 1);
      transform: translate(-12px, 27px) !important;
      .dropdown-item {
        &.active,
        &:active {
          background: none;
        }
      }
      .readed {
        border-bottom: 0.5px solid rgba(147, 147, 147, 1);
      }

      a {
        color: #fff;
        padding: 0.5rem 1rem;

        &:hover,
        &:focus,
        &:active {
          background-color: #f9b938;
        }
      }

      &:hover,
      &:focus,
      &:active,
      &:visited,
      &:target {
        background-color: rgba(46, 58, 89, 1);
      }
    }
    .dropdown-toggle {
      &::after {
        display: none;
      }
      &:focus {
        box-shadow: none;
      }
    }
  }

  @media (min-width: 415px) {
    /* display: block; */
  }
`

export const DropDown = styled.div`
  position: absolute;
  right: 0;
  top: 23px;
  z-index: 999;
  background-color: #2e3a59;
  display: flex;
  flex-direction: column;
  width: 120px;
  visibility: hidden;

  a {
    color: #ffffff !important;
    font-size: 1.4rem;
    padding: 5px;
    line-height: 2.2rem;
    cursor: pointer;
  }

  .readed {
    border-bottom: 0.5px solid #939393;
  }
`

export const IconMore = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  span {
    font-size: 1.4rem;
    color: #f9b938;
    cursor: pointer;
  }
`

export const Loader = styled.div`
  .loading-spinner {
    margin: 1rem auto 0 auto;
    width: 16px;
    height: 16px;
    border: 1px solid #f3f3f3; /* Light grey */
    border-top: 1px solid rgba(0, 0, 0, 0.5); /* Black */
    border-radius: 50%;
    animation: spinner 1s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const End = styled.div`
  color: #f9b938;
  font-size: 2rem;
  text-align: center;
`

export const NotHaveNotification = styled.div`
  color: #f9b938;
  font-size: 2rem;
  text-align: center;
  margin-top: 5rem;
`
