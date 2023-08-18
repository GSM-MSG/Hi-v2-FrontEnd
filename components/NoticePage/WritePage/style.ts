import styled from '@emotion/styled'

export const WriteContainer = styled.div`
  width: 34vw;
  height: 80vh;
  background-color: #fff;
  border-radius: 8px;
  padding: 6vh 2.5vw;
`

export const WriteContentContainer = styled.div`
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

  p:nth-child(1) {
    margin-right: 4px;
    color: #6c6c6c;
  }

  p:nth-child(2) {
    color: #b1b1b1;
  }

  p:nth-child(3) {
    color: #ff005c;
  }
`
