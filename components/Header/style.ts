import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 3.8rem;
  padding: 0 18vw;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  background: #ffffff;

  & > svg {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (max-width: 850px) {
    padding: 0 14vw;
  }

  @media screen and (max-width: 670px) {
    padding: 0 10vw;
  }

  @media screen and (max-width: 450px) {
    padding: 0 5vw;
  }
`
