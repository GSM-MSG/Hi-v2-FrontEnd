import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  position: relative;
  width: 310px;
  background-color: #fff;
  border-radius: 12px;
  padding: 52px 0 40px 0;
  z-index: 10;
`

export const SVGConatiner = styled.div`
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

export const LoginTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  gap: 32px;
`
