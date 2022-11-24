import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #f9b938;
  margin-top: 1rem;
  @media (max-width: 1070px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0rem 2rem;
  }
  .infor {
    display: flex;
    align-items: flex-end;
    margin-bottom: 2rem;

    @media (min-width: 1024px) {
      input {
        width: 100%;
        background-color: rgba(46, 58, 89, 0);
      }
    }
    .loading {
      padding-left: 2rem;
    }
    .change-name {
      display: flex;
      align-items: flex-end;
      width: 64%;
      @media (max-width: 566px) {
        flex-direction: column;
        align-items: flex-start;
        .change-name-user {
          width: 100%;
          input {
            width: 100%;
          }
        }
      }
      .input-username {
        border-bottom: 1px solid #f9b938;
        margin-right: 1rem;
      }
    }
    .input_file {
      display: none;
    }
    .change-avatar {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 4rem;

      &:hover {
        cursor: pointer;
      }
      .camera {
        position: absolute;
        display: flex;
        align-items: center;
        background-color: gray;
        border-radius: 50%;
        right: 10%;
        top: 50%;
        padding: 0.2rem;
        @media (max-width: 430px) {
          top: 48%;
          right: 10%;
        }
      }
      img {
        border-radius: 50%;
      }
      h3 {
        font-style: italic;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.3px;
        color: #ffffff;
      }
      @media (max-width: 566px) {
        margin-left: 2rem;
      }
    }
  }
  .setting {
  }
  .right {
    width: 90%;
    margin: auto;
    @media (max-width: 1070px) {
      margin-bottom: 5rem;
      width: 100%;
    }
    .title {
      text-align: right;
      @media (max-width: 1070px) {
        text-align: left;
      }
    }
    .general {
      display: flex;
      flex-direction: column;
      div {
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
        border-radius: 3px;
      }
      div:nth-child(odd) {
        background-color: rgb(83, 93, 115);
      }
      div:nth-child(even) {
        background-color: rgb(57, 66, 89);
      }
    }
  }
  .switch {
    display: flex;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 2rem;
    background: #1c253c;
    border: 1px solid #2f3954;
    box-sizing: border-box;
    box-shadow: 0px 19px 5px rgba(16, 21, 35, 0.01),
      0px 12px 5px rgba(16, 21, 35, 0.04), 0px 7px 4px rgba(16, 21, 35, 0.14),
      0px 3px 3px rgba(16, 21, 35, 0.24), 0px 1px 2px rgba(16, 21, 35, 0.28),
      0px 0px 0px rgba(16, 21, 35, 0.29);
    border-radius: 2px;
    width: 50%;
    margin-bottom: 4rem;
    @media (max-width: 450px) {
      width: 70%;
    }
    div:last-child {
      color: white;
    }
  }
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  letter-spacing: 0.3px;
  color: #f9b938;
  margin-bottom: 4rem;
`
export const Button = styled.button`
  background-color: #f9b938;
  font-weight: 500;
  font-size: 13px;
  line-height: 180%;
  text-align: center;
  color: #1c253c;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  @media (max-width: 566px) {
    margin-top: 1rem;
  }
`
export const ButtonDelete = styled.button`
  font-weight: 500;
  font-size: 15px;
  line-height: 180%;
  text-align: center;
  color: white;
  padding: 1rem 5rem;
  border: none;
  background-color: #e92f2f;
  box-shadow: 0px 19px 5px rgba(16, 21, 35, 0.01),
    0px 12px 5px rgba(16, 21, 35, 0.04), 0px 7px 4px rgba(16, 21, 35, 0.14),
    0px 3px 3px rgba(16, 21, 35, 0.24), 0px 1px 2px rgba(16, 21, 35, 0.28),
    0px 0px 0px rgba(16, 21, 35, 0.29);
  border-radius: 7px;
`
export const Label = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
  color: #48577d;
  margin-bottom: 0.5rem;
`
export const Input = styled.input`
  border: none;
  font-size: 18px;
  line-height: 180%;
  color: #ffffff;
  &:focus {
    border: none !important;
    outline: none !important;
  }
  @media (max-width: 1024px) {
    background-color: rgba(0, 0, 0, 0);
  }
`
export const Line = styled.div`
  background-color: red;
  width: 97.5%;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(237, 176, 27, 1) 0%,
    rgba(251, 222, 72, 0) 50%,
    rgba(237, 176, 27, 1) 100%
  );
  margin-bottom: 4rem;
  @media (max-width: 700px) {
    margin: 0 1rem;
    margin-bottom: 4rem;
  }
  @media (min-width: 1024px) {
    background: linear-gradient(
      to right,
      rgba(249, 185, 56, 1),
      rgba(249, 185, 56, 0)
    );
  }
`
