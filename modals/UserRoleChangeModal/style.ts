import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  width: 338px;
  height: 217px;
  background: #fff;
  border-radius: 16px;
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
    ${({ theme }) => theme.typography.h5.bold};
  }

  svg {
    cursor: pointer;
  }
`

export const RoleButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.typography.body1.medium};
`

export const RoleButtonItem = styled.div<{ color: string; isClicked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 54px;
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