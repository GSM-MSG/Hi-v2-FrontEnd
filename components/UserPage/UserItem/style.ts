import styled from '@emotion/styled'

export const UserItemContainer = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: #f9f9f9;
  }
`

export const UserItemWrapper = styled.div`
  height: 66px;
  display: flex;
  align-items: center;
  gap: 16px;
`

export const UserProfileContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;

  img {
    border-radius: 50%;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const UserName = styled.p`
  ${({ theme }) => theme.typography.body1.bold};
  color: ${({ theme }) => theme.color.Grayscale.gray09};
`

export const UserEmail = styled.p`
  color: ${({ theme }) => theme.color.Grayscale.gray06};
  ${({ theme }) => theme.typography.body2.regular};
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  ${({ theme }) => theme.typography.body1.medium};

  @media screen and (max-width: 480px) {
    button {
      width: 14vw;
    }
  }
`
