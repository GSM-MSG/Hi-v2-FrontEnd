import styled from '@emotion/styled'

export const NoticeWriteContainer = styled.div`
  width: 580px;
  height: 80vh;
  background-color: #fff;
  border-radius: 8px;
  padding: 6vh 50px;

  @media screen and (max-width: 600px) {
    padding: 6vh 30px;
  }
`

export const NoticeWriteContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    margin-top: 14vh;
  }
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 2vh;
`

export const WriteInputTitle = styled.div`
  ${({ theme }) => theme.typography.body2.medium};
  display: flex;

  p:nth-of-type(1) {
    margin-right: 4px;
    color: ${({ theme }) => theme.color.Grayscale.gray07};
  }
  p:nth-of-type(2) {
    color: ${({ theme }) => theme.color.Grayscale.gray05};
  }
  p:nth-of-type(3) {
    color: ${({ theme }) => theme.color.sub};
  }
`
