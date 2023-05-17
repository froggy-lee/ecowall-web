/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  padding-top: 7rem;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  visibility: hidden;
  transition: all 0.5s;
  opacity: 0;
  &.close {
    visibility: visible;
    opacity: 1;
  }

  @media (min-width: 1110px) {
    padding-top: 10.5rem;
  }
`

export const Container = styled.div`
  background-color: #2e3a59;
  border-radius: 16px;
  padding: 1.5rem 2rem 3.5rem 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow-y: auto;
  height: 50rem;
  ::-webkit-scrollbar {
    width: 0px;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem 2rem 3.5rem;
  }

  @media (min-width: 1111px) {
    width: 90rem !important;
  }
`
export const Cancel = styled.div`
  display: flex;
  justify-content: flex-end;

  .cancel {
    cursor: pointer;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-bottom: 1rem;
`

export const Avatar = styled.div`
  & .image {
    border-radius: 4px;
  }

  div {
    font-size: 2rem;
    color: #8c9abc;
    width: 4.1rem;
    height: 4.1rem;
    background-color: #33334c;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
`

export const InfoUser = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
`

export const WrapperUser = styled.div`
  display: flex;
  align-items: baseline;
`

export const Level = styled.div`
  span {
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
    background-color: #57668c;
    padding: 6px 10px;
    line-height: 1.5rem;
    border-radius: 4px;
    margin-right: 1rem;
  }
`

export const Exp = styled.p`
  font-size: 9px;
  color: #fff;
  margin-bottom: 0;
`

export const UserName = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  background-image: linear-gradient(to bottom, #edb01b 0%, #ffdb70 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  width: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 700px) {
    width: 35rem !important;
  }
  @media (min-width: 500px) {
    width: 25rem;
  }
`

export const Progress = styled.div`
  width: 100%;
  background-color: #202b47;
  margin-bottom: 1rem;
  border-radius: 5px;
  position: relative;
  z-index: 999;
  padding-bottom: 4px;

  .determinate {
    position: absolute;
    background-color: #f9b938;
    height: 4px;
    width: 32%;
    border-radius: 5px;

    @media (min-width: 900px) {
      height: 4px;
    }
  }

  @media (min-width: 900px) {
    margin: 1rem 0 2rem;
    height: 6px;
  }
`

export const Box = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .box-item {
    box-shadow: rgb(16 21 35 / 2%) 0px 19px 5px,
      rgb(16 21 35 / 15%) 0px 12px 5px, rgb(16 21 35 / 50%) 0px 7px 4px,
      rgb(16 21 35 / 85%) 0px 3px 3px, rgb(16 21 35 / 98%) 0px 1px 2px,
      rgb(16 21 35) 0px 0px 0px;
    border: 1px solid rgb(47, 57, 84);
    box-sizing: border-box;
    background-color: rgb(28, 37, 60);
    padding: 1rem 0;
    margin-bottom: 1rem;
    border-radius: 3px;

    h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 15px;
      letter-spacing: 0.3px;
      color: rgb(249, 185, 56);
    }

    div {
      color: #fff;
    }

    @media (min-width: 900px) {
      width: 32%;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
  }
`

export const LineGraph = styled.div`
  @media (min-width: 900px) {
    width: 65%;
    margin: 0 auto;
  }
`

export const Private = styled.div`
  font-size: 3rem;
  color: red;
`
