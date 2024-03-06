import styled from '@emotion/styled'

export const NoticeItemContainer = styled.div`
  ${({ theme }) => theme.typography.body1.regular};
  line-height: 22px;
  position: relative;
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f9ff;
  }
`

export const NoticeItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const NoticeIDXContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.Grayscale.gray05};
`

export const NoticeIDX = styled.div`
  ${({ theme }) => theme.typography.body1.regular};
  line-height: 22px;
  width: 36px;
  height: 36px;
  text-align: center;
  border-radius: 8px;
  margin-left: 16px;
  background-color: #ebf3ff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    background-color: #fff;
    margin-left: 4px;
  }
`

export const NoticeTitle = styled.div`
  color: ${({ theme }) => theme.color.Grayscale.gray08};
  width: 44vw;
  padding-right: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 27px;
  padding-right: 6vw;

  @media screen and (max-width: 750px) {
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`

export const NoticeDate = styled.div`
  color: ${({ theme }) => theme.color.Grayscale.gray05};
  text-align: center;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`

export const NoticeUser = styled.div`
  color: ${({ theme }) => theme.color.Grayscale.gray05};
  width: 120px;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 450px) {
    font-size: 9px;
  }
`

export const SVG = styled.div`
  text-align: center;
  padding: 8px;
`
