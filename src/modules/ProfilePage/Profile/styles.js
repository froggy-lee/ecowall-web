import styled from 'styled-components'

export const WrapperProfile = styled.div`
  @media (min-width: 1024px) {
    margin: 0 2%;
    margin-top: 20rem;
  }
`
export const Wrapper = styled.div`
  color: #2e3a59;
  width: 100%;
  margin: auto;
  background-color: rgba(46, 58, 89, 0.7);
  margin-top: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 4rem 6rem;
  @media (max-width: 1024px) {
    padding: 5rem 2.5rem;

    background-color: rgba(28, 37, 60, 1);
  }
  .top-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: white;
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      width: 97%;
      margin: auto;
    }
    .account {
      display: flex;
      gap: 0rem;
      align-items: center;
      @media (max-width: 500px) {
        display: flex;
        align-items: center;
      }
      .avatar span img {
        border-radius: 40px;
      }
      .account-infor {
        margin-left: 1rem;
        .name {
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          display: flex;
          align-items: center;
          @media (max-width: 500px) {
            flex-direction: column;
            align-items: flex-start;
          }
          div {
            max-width: 30rem;
            overflow: hidden;
            white-space: pre-wrap;
            text-overflow: ellipsis;
            @media screen and (max-width: 450px) {
              max-width: 24rem;
            }
          }
          span {
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 0.3px;
            width: 7rem;
            text-align: center;
            color: #f9b938;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
            border-radius: 2px;
            background-color: rgb(83, 93, 115);
            padding: 0.2rem 0.5rem;
            margin-left: 2rem;

            @media (max-width: 500px) {
              width: 8rem;
              text-align: center;
              padding: 0.5rem 0rem;
              margin-top: 1rem;
              margin-left: 0rem;
            }
          }
        }
        p {
          font-size: 11px;
          line-height: 15px;
          margin-top: 5%;
        }
        .full-exp {
          width: 100%;
          height: 6px;
          background: #202b47;
          border-radius: 100px;
          @media (max-width: 700px) {
            width: 80%;
            margin-top: 2rem;
            background: #2e3a59;
          }
        }
      }
    }

    .des {
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin: 4rem 0;
      @media (max-width: 500px) {
        flex-direction: column;
        width: 80%;
        margin: auto;
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
    }

    .list-btn {
      display: flex;
      /* gap: 4px; */
      margin-bottom: 3rem;

      @media (max-width: 700px) {
        flex-direction: column;
        /* gap: 1rem; */
        justify-content: space-between;
      }
    }
  }
`

export const Des = styled.div`
  background-color: #1c253c;
  min-width: 30%;
  padding: 1rem 0;
  border: 1px solid #2f3954;
  box-sizing: border-box;
  box-shadow: 0px 19px 5px rgba(16, 21, 35, 0.02),
    0px 12px 5px rgba(16, 21, 35, 0.15), 0px 7px 4px rgba(16, 21, 35, 0.5),
    0px 3px 3px rgba(16, 21, 35, 0.85), 0px 1px 2px rgba(16, 21, 35, 0.98),
    0px 0px 0px #101523;
  border-radius: 3px;
  @media (max-width: 500px) {
    margin-top: 1.5rem;
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.3px;
    color: #f9b938;
  }
`

export const Button = styled.a`
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.3px;
  width: 14rem;
  color: #ffffff;
  padding: 1.2rem 0rem;
  background: linear-gradient(360deg, #edb01b 0%, #fbde48 100%);
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    color: #fff !important;
  }

  & > div {
    margin-right: 0.5rem;
  }

  @media (max-width: 700px) {
    padding: 1.7rem 1rem;
    font-weight: 700;
    width: 100%;
    border: 1px solid #fff;
    margin-bottom: 1rem;
  }
`
export const Exp = styled.div`
  width: ${props => (props.exp ? `${props.exp}%` : '0%')};
  height: 6px;
  background-color: #f9b938;
  border-radius: 100px;
`

export const WrapperTab = styled.div`
  background-image: url('/images/bg-tutorial.png'),
    linear-gradient(to bottom, rgba(28, 37, 60, 1), rgba(28, 37, 60, 0));
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 0rem 2.5%;
  margin: 0 auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-bottom: 4rem;

  @media (min-width: 1024px) {
    background: rgba(46, 58, 89, 0.7);
  }
`

export const TabGeneral = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  @media (min-width: 700px) {
    margin-left: 2rem;
  }

  @media (min-width: 1025px) {
    margin-left: 4rem;
    margin-right: 4rem;
  }
`

export const TabEarning = styled.div`
  margin: 0 2rem;
  padding-top: 4rem;
  display: ${props => (props.active ? 'block' : 'none')};
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(237, 176, 27, 1) 0%,
      rgba(251, 222, 72, 0) 50%,
      rgba(237, 176, 27, 1) 100%
    );
  }

  @media (min-width: 1024px) {
    &::before {
      background: linear-gradient(
        to right,
        rgba(249, 185, 56, 1),
        rgba(249, 185, 56, 0)
      );
    }
  }
`

export const TabWithDraw = styled.div`
  margin: 0 2rem;
  padding-top: 4rem;
  display: ${props => (props.active ? 'block' : 'none')};
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(237, 176, 27, 1) 0%,
      rgba(251, 222, 72, 0) 50%,
      rgba(237, 176, 27, 1) 100%
    );
  }

  @media (min-width: 1024px) {
    &::before {
      background: linear-gradient(
        to right,
        rgba(249, 185, 56, 1),
        rgba(249, 185, 56, 0)
      );
    }
  }
`
