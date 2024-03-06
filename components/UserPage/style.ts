import styled from '@emotion/styled'

export const UserTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #d9d9d9;
  padding-bottom: 20px;

  h1 {
    ${({theme}) => theme.typography.h4.bold};
    line-height: 33.41px;
    color: ${({theme}) => theme.color.Grayscale.gray09};;
  }
`

export const InputWrapper = styled.form`
  display: flex;
  position: relative;
  align-items: center;

  @media screen and (max-width: 640px) {
    display: none;
  }

  input {
    ${({theme}) => theme.typography.body2.medium};
    padding: 16px;

    &::placeholder {
      ${({theme}) => theme.typography.body2.medium};
    }
  }
`

export const SearchIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 18px;
  cursor: pointer;
`

export const UserItemListContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
