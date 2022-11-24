import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 20rem;
  color: #f9b938;
  padding-bottom: 10rem;
  height: 100vh;
  .ecowall {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 36px;
    line-height: 38px;
    letter-spacing: 0.765939px;
    div {
      margin-left: 1rem;
      margin-top: 1rem;
      text-transform: uppercase;
    }
  }
  .icon {
    display: flex;
    justify-content: center;
  }
  .lds-dual-ring {
    display: inline-block;
    width: 70px;
    height: 70x;
    margin-left: calc(50%-35px);
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    font-weight: 700;
    font-size: 20px;
    line-height: 45px;
    text-align: center;
    letter-spacing: 0.12em;
    background: linear-gradient(to left, #030d28 30%, #ffffff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-size: 500%;
    background-size: 500%;
    animation: animate 3s linear infinite;
    @keyframes animate {
      0% {
        background-position: 0 100%;
      }
      40% {
        background-position: 100% 0;
      }
      80% {
        background-position: 0 100%;
      }
    }
  }
`
