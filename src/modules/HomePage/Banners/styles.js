import styled from 'styled-components'

export const Wrapper = styled.div`
  .slick-list {
    width: 60%;
    height: 45rem;
    margin: auto;
    margin-top: 30rem;
    margin-bottom: 20rem;
    @media (max-width: 1023px) {
      width: 90%;
      margin-top: 17rem;
      margin-bottom: 0rem;
    }
    @media (max-width: 1153px) {
      width: 90%;
    }
    .slick-track {
      .slide {
        padding-left: 60%;
        img:hover {
          cursor: pointer;
        }
      }
    }
  }
  .back-ground {
    width: 60%;
    margin: auto;
    @media (max-width: 1023px) {
      width: 100%;
    }
    .introduce {
      margin-bottom: 10rem;
      position: absolute;
      top: 30rem;
      width: 30%;
      background-image: linear-gradient(
        to right,
        rgba(28, 37, 60, 1),
        rgba(28, 37, 60, 0.1)
      );
      @media (max-width: 1023px) {
        width: 45%;
        padding-left: 5%;
      }
      @media (max-width: 1023px) {
        top: 16rem;
      }
      .title {
        width: 100%;
        font-style: normal;
        font-weight: 600;
        font-size: 5.1rem;
        line-height: 59px;
        letter-spacing: -0.3px;
        background: linear-gradient(156.84deg, #edb01b 0%, #ffdb70 84.68%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 2rem;

        @media (max-width: 1190px) {
          width: 120%;
        }

        @media (max-width: 1023px) {
          font-size: 23px;
          line-height: 31px;
          width: 120%;
        }
      }
      .des {
        font-weight: 600;
        font-size: 23px;
        line-height: 30px;
        letter-spacing: -0.4px;
        color: #ffffff;
        margin-bottom: 4rem;
        @media (max-width: 1023px) {
          font-size: 14px;
          line-height: 18px;
          letter-spacing: -0.4px;
          width: 90%;
          margin-bottom: 2rem;
        }
      }
    }
  }
`

export const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #000000;
  background: linear-gradient(360deg, #edb01b 0%, #fbde48 100%);
  border: 2px solid #ffec8b;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 1.5rem 6rem;
  margin-bottom: 6rem;
  @media (max-width: 1023px) {
    padding: 1.5rem 0rem;
    width: 14rem;
    margin-bottom: 2rem;
    font-size: 14px;
  }
`
