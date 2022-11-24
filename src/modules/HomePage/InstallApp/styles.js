import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 66.4rem;
  background-image: url('/images/install-bg.png');

  @media (min-width: 1024px) {
    background-image: url('/images/Earn-page/Surveys/bg.png');
  }

  @media (min-width: 1024px) {
    height: 64.4rem;
    margin: 0 auto;
    padding: 0 21%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ImageTop = styled.div`
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const ImageBig = styled.div`
  display: flex;
  position: relative;
  left: 12px;
`

export const ImageSmall = styled.div`
  display: flex;
  position: relative;
  top: 11%;
  right: 12px;

  @media (min-width: 1024px) {
    top: 14.5%;
    right: 24px;
  }
`
export const ImageMobileBig = styled.div`
  background-image: url('/images/mobile-big.png');
  width: 17.6rem;
  height: 36rem;

  @media (min-width: 1024px) {
    background-image: url('/images/mobile-big-desktop.png');
    width: 22.9rem;
    height: 46.6rem;
  }
`

export const ImageMobileSmall = styled.div`
  background-image: url('/images/mobile-small.png');
  width: 13.3rem;
  height: 27.1rem;

  @media (min-width: 1024px) {
    background-image: url('/images/mobile-small-desktop.png');
    width: 17.2rem;
    height: 35rem;
  }
`

export const ContentBot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;

  p {
    margin-bottom: 0;
  }

  p:nth-child(2) {
    margin-top: -16px;
    @media (min-width: 1024px) {
      padding-bottom: 6rem;
      margin-top: -24px;
    }
  }

  p:nth-child(3) {
    margin-bottom: 10px;
  }

  @media (min-width: 1024px) {
    margin-top: -9%;
  }
`
export const Title = styled.div`
  text-align: center;
  @media (min-width: 1024px) {
    text-align: right;
  }
`

export const TitleTop = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  background: linear-gradient(
    104.12deg,
    rgba(237, 176, 27, 1) 15%,
    rgba(251, 222, 72, 1) 80.68%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  background-clip: text;
  /* margin-bottom: 0;s */

  @media (min-width: 1024px) {
    font-size: 4.1rem;
    margin-bottom: -2%;
  }
`

export const TitleBot = styled.h1`
  font-size: 5.1rem;
  font-weight: 700;
  background: linear-gradient(
    104.12deg,
    rgba(237, 176, 27, 1) 15%,
    rgba(251, 222, 72, 1) 80.68%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  background-clip: text;
  height: 67px;

  @media (min-width: 1024px) {
    white-space: nowrap;
    font-size: 5.5rem;
    margin-bottom: 18%;
  }
`

export const GetTheApp = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  background: linear-gradient(
    104.12deg,
    rgba(237, 176, 27, 1) 15%,
    rgba(251, 222, 72, 1) 80.68%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  background-clip: text;

  @media (min-width: 1024px) {
    font-size: 2.6rem;
    margin-bottom: 0.6rem;
  }
`

export const DownLoad = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  position: relative;
`

export const Appstore = styled.div`
  margin-left: 2%;

  @media (min-width: 414px) {
    margin-left: 4%;
  }
`

export const CHPlay = styled.div``
