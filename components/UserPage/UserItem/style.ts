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

  svg {
    margin: 0 16px 0 8px;
  }

  button {
    margin-right: 8px;
  }
`

export const UserItemWrraper = styled.div`
  img {
    border-radius: 50%;
    margin-right: 16px;
    margin-left: 8px;
  }

  svg {
    width: 48px;
    height: 48px;
  }

  height: 66px;
  display: flex;
  align-items: center;
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
