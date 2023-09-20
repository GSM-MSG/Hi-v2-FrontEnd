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
  height: 66px;
  display: flex;
  align-items: center;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserName = styled.p`
  color: #3c3c43;
`

export const UserEmail = styled.p`
  color: #9e9e9e;
`
