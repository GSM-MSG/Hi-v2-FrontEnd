import styled from '@emotion/styled'

export const CheckModalContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 16px;
  width: 340px;
  height: 199px;
  padding: 24px;
  ${({ theme }) => theme.typography.h5.medium};
  font-size: 17px;

  h2 {
    ${({ theme }) => theme.typography.title.bold};
    font-size: 22.5px;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.color.Grayscale.gray06};
    font-size: 17px;
    margin-bottom: 29px;

    b {
      color: ${({ theme }) => theme.color.sub};
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    ${({ theme }) => theme.typography.body1.bold};
  }
`
