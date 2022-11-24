import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 17rem 18rem 20rem;
  justify-content: space-around;
  background: #425074;
  border-radius: 6px;
  padding: 2rem 0rem 0.5rem 0rem;
  margin-bottom: 10rem;
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 90%;
    margin: auto;
    margin-bottom: 5rem;
  }
`
export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.3px;
  color: rgb(238, 180, 31);
  //color:red;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`
export const Des = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #e1e1e1;
  margin-top: 1rem;

  @media (max-width: 1023px) {
    width: 17.5rem;
  }
`
