import styled from '@emotion/styled'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    ${({ theme }) => theme.typography.body1.regular};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.white};

    &:hover {
      color: ${({ theme }) => theme.color.white};
    }
  }

  @media screen and (max-width: 450px) {
    button {
      &:nth-of-type(2) {
        display: none;
      }
    }
  }
`
