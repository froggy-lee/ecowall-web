import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    @media (max-width: 850px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .title-text {
      border-left: 5px solid #f9b938;
      padding: 1rem;
    }
    .gift-button {
      @media (max-width: 850px) {
        margin-top: 1rem;
      }
      button {
        background: linear-gradient(360deg, #edb01b 0%, #fbde48 100%);
        border: 1px solid #ffffff;
        border-radius: 3px;
        padding: 0.5rem 1rem;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.3px;
        color: #ffffff;
        display: flex;
        align-items: center;
        .text {
          margin-left: 1rem;
        }
      }
    }
  }
  .des {
    font-size: 13px;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
  }
  .users-referred {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    .user-referred {
      background: #1c2439;
      border-radius: 6px;
      padding: 2rem 1.5rem;
      display: flex;
      .icon {
        width: 46px;
        height: 38px;
        margin-right: 1rem;

        @media (max-width: 430px) {
          width: 55px;
        }
        @media (max-width: 430px) {
          width: 70px;
        }
      }
      .language {
        @media (max-width: 600px) {
          left: 1.5rem;
          width: 120%;
        }

        @media (max-width: 430px) {
          left: 1rem;
          width: 140%;
          font-size: 0.9rem;
        }
      }
    }

    @media (max-width: 600px) {
      display: flex;
      width: 100%;
      .user-referred {
        width: 49%;
        position: relative;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: flex-end; */
    .list-socialmedia {
      width: 40%;
      margin-left: 60%;
      display: flex;
      justify-content: flex-end;
      //position: absolute;
      @media (max-width: 850px) {
        position: absolute;
        top: 10.5rem;
        right: 2rem;
      }
      img {
        padding-left: 0.5rem !important;
      }
      img:hover {
        cursor: pointer;
      }
    }
    .referral-code {
      margin-top: 1rem;
      margin-left: 1rem;

      @media (max-width: 850px) {
        display: flex;
        flex-direction: column;
        .list-btn {
          margin-top: 1rem;
        }
      }
    }
  }
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 15px;
  letter-spacing: 0.3px;
  color: #f9b938;
`
export const Section = styled.section`
  background-color: #212c47;
  border-radius: 16px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-gap: 1rem; */
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`
export const Span = styled.span`
  color: #f9b938;
`
export const Coin = styled.div`
  font-size: 21px;
  color: #f9b938;
  @media (max-width: 600px) {
    margin-top: 0.5rem;
  }
`
export const UsersReferred = styled.div`
  font-size: 12px;
  @media (max-width: 600px) {
    font-size: 10px;
    position: absolute;
    top: 6rem;
    left: 10%;
  }
  @media (max-width: 430px) {
    /* left: -6.5r; */
    width: 180%;
    line-height: 15px;
  }
`
export const ButtonMedia = styled.button`
  padding: 0.5rem 0.5rem 0.2rem 0.5rem;
  background: #425074;
  border-radius: 6px;
  margin-left: 0.5rem;
`
export const Button = styled.button`
  padding: 1.5rem 3rem;
  font-size: 16px;
  line-height: 15px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.3px;
  color: ${props => (props.primary ? 'white' : '#8C9ABC')};
  background-color: ${props => (props.primary ? '#F9B938' : '#2E3A59')};
  border-radius: 3px;
  border: none;
  width: 100%;
  @media (max-width: 850px) {
    padding: 1.5rem 1rem;
  }
`
export const ReferralCode = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #425074;
  margin-bottom: 1rem;
  color: #44506d;
  font-size: 18px;
  line-height: 15px;

  @media (max-width: 850px) {
    margin-top: 1rem;
  }
`
