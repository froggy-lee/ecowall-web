import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: -4rem;
  z-index: 0;
  .background {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background-image: url('/images/footer-bg.png');
    background-repeat: no-repeat;
    background-origin: content-box;
    background-size: 100%;
    opacity: 0.3;
    @media (min-width: 1024px) {
      background-image: url('/images/footer-bg2.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`

export const FooterSection = styled.div`
  padding: 4rem 0rem 4rem 1.8rem;
  margin-top: 4rem;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    padding: 2% 20% 5%;
  }
`

export const FooterLogoWrapper = styled.div`
  padding-top: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  top: -0.6rem;
  left: 0.6rem;

  @media (min-width: 1024px) {
    top: 0.4rem;
    left: -0.4rem;
  }
`

export const FooterLogo = styled.div`
  padding-right: 1rem;
`

export const FooterLogoTitle = styled.h1`
  font-size: 2.1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.main};
  margin: 0;
  margin-left: 1rem;
`

export const FooterMenuWrapper = styled.div`
  display: grid;
  padding: 3rem 0 1rem 0;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  top: -2rem;
  right: -0.6rem;

  @media (min-width: 1024px) {
    padding: 2rem 0 1rem 0;
    grid-template-columns: repeat(3, 1fr);
    top: 1.4rem;
    right: 0.4rem;
  }

  .second-child {
    position: relative;
    a:hover {
      color: #7080aa !important;
    }

    @media (min-width: 1024px) {
      left: -30%;
      width: 115%;
    }
  }

  .first-child {
    a:hover {
      color: #7080aa;
    }
  }
  .third-child {
    position: relative;
    top: -3.6rem;

    li {
      padding-bottom: 2px;

      a:hover {
        color: #7080aa;
      }
    }

    @media (min-width: 1024px) {
      top: 0 !important;
      left: 55%;

      h1 {
        margin-bottom: -0.8rem;
      }

      li {
        line-height: 2.6rem;

        a {
          color: #ffffff !important;
        }
      }
    }
    @media (min-width: 400px) {
      top: -3.6rem;
    }
  }

  .last-child {
    position: relative;
    top: 2rem;
    a:hover {
      color: #fff !important;
    }

    @media (min-width: 1024px) {
      top: -4rem !important;
      width: 100%;

      a {
        font-size: 1.6rem !important;
      }
    }

    @media (min-width: 400px) {
      top: 1.9rem;
    }
  }
`

export const FooterMenuContainer = styled.div``

export const FooterMenuTitle = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  color: #425074;
  line-height: 3.6rem;

  @media (min-width: 1024px) {
    margin-bottom: 1.6rem;
    font-size: 2.1rem;
  }
`

export const FooterMenuLinkWrapper = styled.ul`
  position: relative;
  .select {
    visibility: visible;
  }
`

export const FooterMenuLink = styled.li`
  display: flex;
  align-items: center;

  a {
    line-height: 2.2rem;
    font-weight: 500;
    font-size: 1.33rem;
    color: #7080aa;
    font-family: 'Poppins';

    @media (min-width: 1024px) {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }

  .select {
    visibility: visible;
  }
`
export const IconFooterMenuLink = styled.div`
  padding-top: 2px;
  padding-right: 5px;
  @media (min-width: 1024px) {
    padding-top: 8px;
  }
`
export const IconFooterLanguage = styled.div`
  padding-right: 1.6rem;
  padding-top: 2px;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  color: #ffffff !important;
  font-weight: 400 !important;
  font-size: 1.6rem !important;
  cursor: pointer;
`
export const IconLanguage = styled.div`
  padding-left: 5px;
  display: flex;
`
export const LanguageSelect = styled.li`
  position: absolute;
  top: -14rem;
  background-color: #333853;
  min-width: 18rem;
  padding: 0.5rem 1.2rem;
  border-radius: 5px;

  cursor: pointer;
  visibility: hidden;
  height: 13rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #030d28;
    border-radius: 3px;
  }

  li {
    padding: 0.8rem;

    &:hover {
      opacity: 0.8;
      background-color: #404769;
      border-radius: 5px;
    }
  }
`
export const Select = styled.ul``

export const FooterCopyRightWrapper = styled.div`
  margin-top: -4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  color: #425074;

  .reserved {
    padding-bottom: 2rem;

    @media (min-width: 1024px) {
      padding-bottom: 1rem;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 3rem;
    margin-left: -0.6rem;
    align-items: flex-start;
    font-size: 1.8rem;
  }
`
