import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #ffffff;
  width: 92%;
  margin: auto;
  margin-top: 20rem;
  background-image: url('/images/bg-cashout.png');
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1023px) {
    margin-top: 15rem;
  }
  .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 15px;
    color: #8c9abc;
    margin-bottom: 2rem;
    h1 {
      font-weight: 700;
      font-size: 27px;
      line-height: 30px;
      letter-spacing: -0.4px;
      background: linear-gradient(360deg, #edb01b 0%, #fbde48 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-clip: text;
      text-transform: uppercase;
      border-left: 5px solid #f9b938;
      padding: 0.5rem 1rem;
    }
  }
  .skins {
    margin-top: 5rem;
  }
  .des {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    background-color: #131b2f;
    width: 48rem;
    padding: 2rem 2rem;
    border-radius: 8px;
    @media (max-width: 460px) {
      width: 100%;
    }

    .text {
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: -0.4px;
      margin-left: 1rem;
    }
  }
  .cash {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 550px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-around;
    }
    img {
      &:hover {
        cursor: pointer;
      }
    }
  }
`
