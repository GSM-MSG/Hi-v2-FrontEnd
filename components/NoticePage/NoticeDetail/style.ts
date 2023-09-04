import styled from '@emotion/styled'

export const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  svg:nth-of-type(1) {
    margin-right: 32px;
    margin-top: 24px;
    cursor: pointer;
  }
`

export const DetailWrapper = styled.div`
  width: 34vw;
  height: 80vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 5vh 3vw;
  gap: 12px;
`

export const DetailTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const DetailTitle = styled.h1`
  width: 84%;
  font-size: 1.6rem;
  font-weight: 600;
  color: #3c3c43;
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
`
