import styled from '@emotion/styled'

export const NoticeItemContainer = styled.div`
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

export const NoticeID = styled.div`
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border-radius: 8px;
  background-color: #ebf3ff;
`

export const NoticeIdContainer = styled.div`
  width: 7%;
  display: flex;
  justify-content: center;
  color: #b1b1b1;
`

export const NoticeTitle = styled.div`
  width: 69%;
  padding-right: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #606060;
`

export const NoticeDate = styled.div`
  width: 12%;
  color: #b1b1b1;
`

export const NoticeUser = styled.div`
  width: 12%;
  color: #b1b1b1;
`
