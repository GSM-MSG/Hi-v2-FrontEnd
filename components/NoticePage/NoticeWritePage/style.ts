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
  font-size: 0.9rem;
  display: flex;

  p:nth-of-type(1) {
    margin-right: 4px;
    color: #6c6c6c;
  }

  p:nth-of-type(2) {
    color: #b1b1b1;
  }

  p:nth-of-type(3) {
    color: #ff005c;
  }
`
