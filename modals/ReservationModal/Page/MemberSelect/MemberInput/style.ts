import styled from '@emotion/styled'

export const InputBlock = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 4.8px 14.4px;
  border: 1px solid ${({ theme }) => theme.color.Grayscale.gray05};
  border-radius: 8px;
  input {
    ${({ theme }) => theme.typography.body1.regular};
  }

  .searchIcon,
  .cancelIcon {
    cursor: pointer;
    margin-top: 0.3rem;
  }
`
