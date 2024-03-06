import styled from '@emotion/styled'

export const CheckModalContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 16px;
  width: 340px;
  height: 199px;
  padding: 24px;

  h2 {
    ${({ theme }) => theme.typography.title.bold};
    font-size: 22.5px;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 0.7rem;
  }

  p {
    color: ${({ theme }) => theme.color.Grayscale.gray06};
    ${({ theme }) => theme.typography.h5.medium};
    font-size: 17px;
    margin-bottom: 1.4rem;
    letter-spacing: -2px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 142px;
    height: 48px;
    ${({theme}) => theme.typography.body1.bold};
  }
`
