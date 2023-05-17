import styled from 'styled-components'

export const TabsWrapper = styled.div`
  position: relative;
  margin-top: 16rem;
  padding: 0 4%;
  background-image: url('/images/Earn-page/Surveys/bg.png');

  @media (min-width: 1024px) {
    padding: 0 9%;
    margin-top: 0;
    padding-top: 13rem;
  }
`

export const Tabs = styled.div`
  position: relative;
  display: flex;
  background-color: #030d28;
  border-radius: 30px;
  height: 4.6rem;
  width: 100%;
  white-space: nowrap;
  margin: 0 auto;
  border: 1px solid #8c9abc;

  @media (min-width: 1024px) {
    height: 4.2rem;
    background: none;
    border: none;
    gap: 1rem;
  }
`

export const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.333333%;
  background-color: #030d28;

  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  font-weight: 600;
  font-size: 1.5rem;
  color: #ffffff;
  padding: 1.2rem 3rem;
  border-radius: 30px;
  &.active {
    border: 1px solid #8c9abc;
    background-color: #f9b938;
    color: #030d28;
  }

  @media (min-width: 1024px) {
    width: 10%;
    color: rgba(66, 80, 116, 1);
    background-color: transparent;
    border: 1px solid #6a80b8;
    border-radius: 4px;

    &.active {
      color: rgba(249, 185, 56, 1);
      background-color: rgba(46, 56, 83, 0.7);
    }
  }
`

export const Title = styled.h1`
  background-image: linear-gradient(to right, #edb01b 0%, #fbde48 100%);
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
  font-weight: 700;
  font-size: 2.3rem;
  padding-top: 2.4rem;
  position: relative;

  &::before {
    content: '';
    width: 43px;
    height: 3px;
    background-image: linear-gradient(to right, #edb01b 0%, #fbde48 100%);
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 3px;
    @media (min-width: 1024px) {
      margin-top: 0;
      width: 4px;
      height: 41px;
      top: 36%;
    }
  }
  @media (min-width: 1024px) {
    padding-left: 2.2rem;
    font-size: 2.7rem;
  }
`

export const TabIcon = styled.div`
  display: flex;
`

export const TabContentWrapper = styled.div`
  position: relative;
  z-index: 0;
`

export const TabContent = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  min-height: 25rem;
  color: white;
`

export const WrapperTable = styled.div`
  width: 100%;
  overflow: hidden;

  @media (min-width: 1024px) {
    background: none;
  }

  table {
    border: none;
    border-spacing: 0 1.1rem;
    border-collapse: separate;
    margin-top: 0;
    thead {
      th {
        border-spacing: 0;
        height: 5rem;
        font-size: 1.2rem;
        color: #8c9abc;
        font-weight: 500;
        padding: 0;
        border-bottom: 0;
        text-align: center;
        padding-top: 2.6rem;

        &:first-child {
          width: 50px;
          padding-right: 10px;
        }
        @media (min-width: 1024px) {
          font-size: 1.3rem;

          &:nth-child(3) {
            padding-right: 20%;
          }
        }
      }
    }
    tbody {
      tr {
        background-color: rgba(255, 255, 255, 0.1);
        height: 5rem;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          td {
            .rank__wrapper {
              .rank__id {
                visibility: hidden;
              }
            }
          }
        }

        td {
          padding: 0;
          border-bottom: 0;

          :first-child {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
          }

          :last-child {
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            width: 20%;
            line-height: 1.3rem;
            text-align: right;
            padding-right: 8px;
            cursor: auto;
          }
          @media (min-width: 1024px) {
            &:nth-child(2) {
              width: 50%;
            }

            &:nth-child(3) {
              padding-right: 20%;
            }

            &:last-child {
              width: 12.5%;
            }
          }
        }

        &:nth-child(1) {
          td {
            &:first-child {
              position: relative;
              &::before {
                content: '';
                background-image: url('images/LeaderBoard/top1.png');
                background-repeat: no-repeat;
                background-position: 50%;
                width: 50px;
                height: 50px;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                position: absolute;
              }
            }
          }
        }
        &:nth-child(2) {
          td {
            &:first-child {
              position: relative;

              &::before {
                content: '';
                background-image: url('images/LeaderBoard/top2.png');
                background-repeat: no-repeat;
                background-position: 50%;
                width: 50px;
                height: 50px;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                position: absolute;
              }
            }
          }
        }
        &:nth-child(3) {
          td {
            &:first-child {
              position: relative;

              &::before {
                content: '';
                background-image: url('images/LeaderBoard/top3.png');
                background-repeat: no-repeat;
                background-position: 50%;
                width: 50px;
                height: 50px;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                position: absolute;
              }
            }
          }
        }
      }
    }
  }
`

export const Panigation = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 3rem;

  @media (min-width: 1024px) {
    margin-right: -1.5%;
  }
`
