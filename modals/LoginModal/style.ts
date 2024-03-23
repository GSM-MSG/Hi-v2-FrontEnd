import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  position: relative;
  width: 310px;
  background-color: #fff;
  border-radius: 12px;
  padding: 52px 0 40px 0;
`

export const SVGContainer = styled.div`
  width: 0px;
  height: 0px;
  cursor: pointer;
  svg {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`

export const ModalContent = styled.div`
  width: 310px;
  height: 324px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const GAuthLoginButton = styled.button`
  width: 268px;
  height: 50px;
  background-color: #2e80cc;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 17px;
`

export const LoginTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  gap: 32px;
`
