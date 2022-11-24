import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #f9b938;
  height: 100vh;
  background-color: #1c253c;
  padding-top: 17rem;
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: scale 3s linear infinite;
    @keyframes scale {
      0% {
        transform: scale(0.2, 0.2);
      }
      30% {
        transform: scale(1, 1);
      }
      50% {
        transform: scale(0.9, 0.9);
      }
      70% {
        transform: scale(1, 1);
      }
      90% {
        transform: scale(0.9, 0.9);
      }
    }
    div {
      font-weight: 700;
      font-size: 50px;
      line-height: 38px;
      margin-top: 0.5rem;
      margin-left: 2rem;
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
