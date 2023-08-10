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
    margin-top: 3vh;
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

export const AddImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 3vh;
`

export const AddImg = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`

export const ImgDesc = styled.p`
  font-size: 0.8rem;
  color: #b1b1b1;
`
