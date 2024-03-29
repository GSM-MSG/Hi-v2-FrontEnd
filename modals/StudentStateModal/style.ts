import styled from '@emotion/styled'

export const ModalContainer = styled.div`
  width: 312px;
  height: 200px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 40px;

  p {
    text-align: center;
    ${({ theme }) => theme.typography.h5.medium};
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  ${({ theme }) => theme.typography.body1.medium};
`
