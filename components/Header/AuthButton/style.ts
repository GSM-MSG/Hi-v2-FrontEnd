import styled from '@emotion/styled'

export const AuthButton = styled.div`
  width: 84px;
  height: 36px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typography.body1.semibold};
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 670px) {
    width: 70px;
    height: 30px;
    ${({ theme }) => theme.typography.body2.semibold};
  }

  @media screen and (max-width: 450px) {
    ${({ theme }) => theme.typography.caption.semibold};
  }
`
