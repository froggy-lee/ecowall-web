import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: rgba(28, 37, 60, 1);
  border-radius: 2rem;
  width: 62.7rem;

  @media (max-width: 650px) {
    width: 100%;
  }
  .slick-slider {
    width: 62.7rem;

    .slick-arrow {
      background-color: #57668c;
      border-radius: 50%;
      position: absolute;
      top: 93%;
      z-index: 1;

      &.slick-prev:before {
        display: flex;
        position: absolute;
        content: '';
        background: url('/images/icons/Polygon-7.png');
        background-repeat: no-repeat;
        background-size: 8px;
        width: 20px;
        height: 20px;
        top: 3px;
        left: 5px;
      }

      &.slick-next:before {
        position: absolute;
        content: '';
        background: url('/images/icons/Polygon-8.png');
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        top: 3px;
        left: 7px;
      }

      @media (max-width: 414px) {
        margin: 0 35% !important;
      }

      @media (max-width: 500px) {
        top: 95.5% !important;
        margin: 0 38%;
      }

      @media (max-width: 799px) {
        top: 96.5%;
        margin: 0 38%;
      }

      @media (min-width: 800px) {
        top: 96.5%;
        margin: 0 40%;
      }
    }
    .slick-dots {
      bottom: 10px;
      & li {
        margin: 0;
      }

      & li button::before {
        color: #fff;
        opacity: 1;
      }

      & li.slick-active button::before {
        color: rgba(249, 185, 56, 1) !important;
      }
      @media (max-width: 414px) {
        bottom: 8px;
      }
    }
    @media (max-width: 650px) {
      width: 100%;
    }
  }
`

export const Container = styled.div`
  width: 100%;
`

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 3rem 0 3rem;
  .cancel {
    cursor: pointer;
    @media (max-width: 500px) {
      width: 2.4rem;
      height: 2.4rem;
      margin-top: -1.2rem;
    }
  }
`

export const TitleTop = styled.div`
  color: rgba(158, 158, 158, 1);
  margin-left: 1.4rem;
  font-size: 1.4rem;
  position: relative;
  font-weight: 500;
  line-height: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: rgba(249, 185, 56, 1);
    border-radius: 50%;
    top: 4px;
    left: -1.4rem;
  }

  @media (max-width: 700px) {
    font-size: 1.2rem;
    width: 80%;
  }

  @media (max-width: 500px) {
    height: 30px;
  }
`

export const WrapperBanner = styled.div`
  margin-bottom: 4rem;
  padding: 0 3rem;
  margin-top: 2rem;

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`

export const Banner = styled.div`
  padding: 1.5rem;
  background-color: rgba(46, 58, 89, 1);
  border-radius: 20px;
  .image {
    border-radius: 4px !important;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
`

export const FooterLeft = styled.div`
  width: ${props => (props.button === true ? '60%' : '68%')};
`

export const TitleBot = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(237, 176, 27, 1),
    rgba(255, 219, 112, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 18px;
  height: 40px;
  padding-top: 4px;

  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`

export const Des = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  height: 60px;
  line-height: 17px;
  padding-top: 4px;

  @media (max-width: 600px) {
    height: 60px;
    font-size: 1rem;
  }
`

export const WrapperButton = styled.div`
  display: ${props => (props.button === true ? 'block' : 'none')};
  background-image: linear-gradient(
    to top,
    rgba(237, 176, 27, 1),
    rgba(251, 222, 72, 1)
  );
  border: 1px solid #fff;
  border-radius: 4px;
  height: 5.4rem;
  width: 14rem;
  margin-left: 1rem;

  @media (min-width: 600px) {
    width: 20rem;
  }
`

export const Button = styled.a`
  margin-bottom: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  cursor: pointer;

  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  &:hover {
    color: #000;
  }
`

export const Line = styled.div`
  height: 4rem;
  border-top: 1px solid rgba(85, 89, 99, 1);
  z-index: -1;
`
