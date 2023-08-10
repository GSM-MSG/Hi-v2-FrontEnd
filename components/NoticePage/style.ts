import styled from '@emotion/styled'

export const NoticeTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.6rem;
    color: #3c3c43;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    @media screen and (max-width: 1350px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 1270px) {
      font-size: 0.7rem;
    }

    @media screen and (max-width: 1200px) {
      font-size: 0.6rem;
    }
  }

  a {
    text-decoration: none;
  }
`
