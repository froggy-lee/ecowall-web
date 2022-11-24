import styled from 'styled-components'
import '@fontsource/rajdhani'

export const Wrapper = styled.div`
  /* margin-top: 13.8rem; */
  height: 24rem;
  background-color: #131b2f;
  margin-top: 1rem;

  font-size: 3rem;
  display: flex;
  flex-direction: row-reverse;

  @media (min-width: 1024px) {
    flex-direction: column;
    height: 22.5rem;
    margin-top: 14rem;
  }

  @media (min-width: 1111px) {
    margin-top: 17rem;
  }

  &.active {
    display: none;
  }
`

export const WrapperStep = styled.div`
  width: 70%;
  margin-left: 9px;
  margin-top: 2rem;
`

export const TitleStep = styled.h1`
  background: linear-gradient(to bottom, #edb01b 0%, #ffdb70 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: 600;
  font-family: 'Rajdhani';
  font-size: 3rem;
  padding-left: 5px;

  @media (min-width: 1024px) {
    display: none;
  }
`

export const Step = styled.div`
  gap: 6.4rem;
  position: relative;
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    padding-left: 2rem;
  }

  .slick-list {
    @media (min-width: 1024px) {
      display: none;
    }
    .slick-track {
      .step1,
      .step2,
      .step3 {
        display: flex !important;
        justify-content: center;
        align-items: center;
      }
    }
  }
`

export const StepOn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 6.4rem;
  margin-top: -1.3rem;
  .step1,
  .step2,
  .step3 {
    background-size: contain;
    background-repeat: no-repeat;
    height: 13rem;
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }
`

export const WrapperTilte = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;

  .title {
    position: relative;
    z-index: 9999;
    width: 100%;
  }

  .background {
    background-image: linear-gradient(
      to bottom,
      rgba(28, 35, 52, 1) 0%,
      rgba(52, 60, 81, 0) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -999;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    background-image: none;
    padding-left: 3.3rem;
    padding-top: 1.5rem;
  }
`

export const Title = styled.h1`
  padding: 0px 10%;
  position: relative;
  z-index: 3;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(237, 176, 27, 1) 15%,
    rgba(251, 222, 72, 1) 80.68%
  );
  font-weight: 700;
  line-height: 4rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  background-clip: text;
  text-align: center;

  @media (min-width: 500px) {
    padding: 0 20%;
  }

  @media (min-width: 1024px) {
    padding: 0 !important;
    color: #ffffff !important;
    font-size: 2.7rem;
    text-align: left;
    -webkit-text-fill-color: #ffffff;
    white-space: nowrap;
  }
`

export const Cansel = styled.div`
  width: 100%;
  text-align: right;
  cursor: pointer;
  padding-right: 13%;

  @media (min-width: 1024px) {
    display: none;
  }
`
