import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  width: 320px;
  height: 210px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  justify-content: space-between;
`

export const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-weight: 600;
  }

  svg {
    cursor: pointer;
  }
`

export const RoleButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const RoleButtonItem = styled.div<{ color: string; isClicked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  border: 1px solid ${({ color }) => color};
  color: ${({ color }) => color};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ color }) => color};
    color: #fff;
  }

  & > svg {
    display: none;
    position: absolute;
    top: -10px;
    right: -8px;
  }

  ${({ isClicked, color }) =>
    isClicked &&
    css`
      background-color: ${color};
      color: #fff;
      & > svg {
        display: block;
        position: absolute;
        top: -10px;
        right: -8px;
      }
    `}
`
