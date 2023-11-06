import styled from '@emotion/styled'

export const DetailContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  svg:nth-of-type(1) {
    cursor: pointer;
  }
`

export const DetailWrapper = styled.div`
  width: 580px;
  height: 80vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 5vh 3vw;
  gap: 12px;

  @media screen and (max-width: 750px) {
    width: 500px;
    padding: 5vh 40px;
    margin-right: 40px;
  }

  @media screen and (max-width: 680px) {
    width: 450px;
    padding: 5vh 40px;
    margin-right: 40px;
  }

  @media screen and (max-width: 600px) {
    width: 420px;
    padding: 5vh 40px;
    margin-right: 40px;
  }

  @media screen and (max-width: 530px) {
    width: 380px;
    padding: 5vh 40px;
    margin-right: 40px;
  }

  @media screen and (max-width: 470px) {
    width: 350px;
    padding: 5vh 40px;
    margin-right: 40px;
  }

  @media screen and (max-width: 450px) {
    width: 310px;
    padding: 5vh 40px;
    margin-right: 40px;
  }

  @media screen and (max-width: 390px) {
    width: 300px;
    padding: 5vh 40px;
    margin-right: 40px;
  }
`

export const DetailTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  button {
    margin-left: 8px;
  }
`

export const DetailTitle = styled.h1`
  width: 84%;
  font-size: 1.6rem;
  font-weight: 600;
  color: #3c3c43;

  @media screen and (max-width: 750px) {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`

export const DetailInfo = styled.p`
  font-size: 0.8rem;
  color: #9e9e9e;
  display: flex;
  gap: 8px;
`

export const DetailContent = styled.p`
  font-size: 1rem;
  color: #3c3c43;
  line-height: 28px;
  margin-top: 4px;
  white-space: pre-wrap;
  overflow: auto;
`
