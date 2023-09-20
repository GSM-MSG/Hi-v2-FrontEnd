import styled from '@emotion/styled'

export const UserTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #d9d9d9;
  padding-bottom: 20px;

  h1 {
    font-size: 1.7rem;
    color: #3c3c43;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 640px) {
    display: none;
  }

  input {
    padding-right: 34px;
  }

  svg {
    position: absolute;
    right: 12px;
    cursor: pointer;
  }
`
