import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: #141c32;
  color: #ffffff;
  padding-bottom: 5rem;

  p {
    margin: 0;
  }
`
export const WrapperTitle = styled.div``

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  padding: 2rem 0;
  font-weight: 700;
  margin-bottom: 0;
`
export const WrapperMenuContent = styled.div`
  padding: 0 1.1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 60%;
    margin: 0 auto;
  }

  .accordion {
    background-color: #2e3a59;
    border-radius: 5px;
    margin-bottom: 1.3rem;
    &-title {
      background-color: #425074;
      display: flex;
      align-items: center;
      padding: 1.6rem 2rem;
      border-radius: 0.5rem;
      font-weight: 500;
      height: 5.7rem;

      display: flex;
      align-items: center;

      span {
        width: 75%;
        padding-left: 1.6rem;
        line-height: 1.5rem;
        font-size: 1rem;

        @media (min-width: 1024px) {
          font-size: 1.3rem;
        }
      }
    }

    &-icon {
      position: relative;
      transition: 0.3s ease-in-out;
      padding-top: 2px;

      &::before {
        content: '';
        background-color: #f9b938;
        width: 2.6rem;
        height: 2.6rem;
        position: absolute;
        z-index: 0;
        opacity: 0.3;
        border-radius: 0.6rem;
        top: -4px;
        left: -6px;
      }
    }

    &-content {
      font-size: 1.2rem;
      line-height: 1.7rem;
      max-height: 0;
      font-weight: 400;
      overflow: hidden;
      transition: 0.2s ease-in-out;
      padding: 0rem 1.8rem 0 1.8rem;
      letter-spacing: 0.2px;
    }
  }
  .active {
    & .accordion-title {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    & .accordion-content {
      padding: 0.7rem 1.8rem 4.9rem 1.8rem;
      max-height: 30em;

      @media (min-width: 1024px) {
        padding: 0.7rem 1.8rem 1.2rem 1.8rem;
      }
    }
    & .accordion-icon {
      transition: transform 0.5s;
      transform: rotate(90deg);
    }
  }
`
