import styled from '@emotion/styled'

export const UserItemContainer = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: #f9f9f9;
  }

  button {
    margin-right: 8px;
  }
`

export const UserItemWrraper = styled.div`
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
  color: #3c3c43;
`

export const UserEmail = styled.p`
  color: #9e9e9e;
  font-size: 15px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`
