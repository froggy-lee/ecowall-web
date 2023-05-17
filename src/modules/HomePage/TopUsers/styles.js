import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #030d28;
  position: fixed;
  top: 10rem;
  z-index: 1;
  left: -0.5rem;
  width: 100%;
  @media (max-width: 1111px) {
    top: 6.5rem;
  }
  .list-user {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    padding: 1.5rem 1.2rem;
    overflow-x: hidden;
    cursor: pointer;
    .avatar {
      display: flex;
      align-items: center;
      & .image {
        border-radius: 4px !important;
      }
    }
    .user {
      min-width: 180px;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      padding: 0.8rem;
      background-color: rgb(30, 41, 68);
      font-weight: 500;
      font-size: 14px;
      line-height: 15px;
      color: #57668c;
      border-radius: 4px;
      .title {
        text-transform: uppercase;
        margin-left: 0.5rem;
        font-size: 10px;
      }
      .user-name {
        color: #8c9abc;
        margin-left: 0.5rem;
        width: 7rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 10px;
      }
      .coin {
        background-color: rgb(47, 55, 77);
        color: #f9b938;
        padding: 0.5rem;
        line-height: 15px;
        text-align: center;
        min-width: 30%;
        margin-left: 1rem;
        div {
          border-right: 2px solid #f9b938;
        }
      }

      .hover-detail-user {
        visibility: hidden;
        width: 165px;
        position: fixed;
        top: 13rem;
        z-index: 1;
        background-color: rgba(46, 58, 89, 1);
        font-size: 1rem;
        padding: 0.5rem 1rem;
        color: rgba(87, 102, 140, 1);
        box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.25);

        @media (min-width: 1112px) {
          top: 16.5rem;
        }

        .title-user {
          width: 6rem;
        }

        .value {
          font-size: 1rem;
          color: rgba(249, 185, 56, 1);
          padding-left: 2rem;
          width: 8rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .hover-user-name,
        .hover-offwall,
        .hover-point {
          display: flex;
        }

        .arrow {
          position: absolute;
          top: -0.8rem;
          right: 50%;
        }
      }

      &:hover {
        .hover-detail-user {
          visibility: visible;
        }
      }
    }
  }
`

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #33334c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`
