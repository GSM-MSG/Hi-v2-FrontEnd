import styled from '@emotion/styled'

export const NoticeItemContainer = styled.div`
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

export const NoticeIDX = styled.div`
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border-radius: 8px;
  margin-left: 16px;
  background-color: #ebf3ff;

  @media screen and (max-width: 600px) {
    background-color: #fff;
    margin-left: 4px;
  }
`

export const NoticeIDXContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b1b1b1;
`

export const NoticeTitle = styled.div`
  width: 44vw;
  padding-right: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #606060;
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
  text-align: center;
  color: #b1b1b1;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`

export const NoticeUser = styled.div`
  width: 120px;
  text-align: center;
  color: #b1b1b1;
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
