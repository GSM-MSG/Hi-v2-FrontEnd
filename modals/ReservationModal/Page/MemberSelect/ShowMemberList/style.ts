import styled from '@emotion/styled'

export const ShowMemberListContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ShowMemberBox = styled.div`
  ${({ theme }) => theme.typography.caption.regular};
  width: 68px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  color: ${({ theme }) => theme.color.Grayscale.gray05};
  padding: 1.6px 8px;
  border-radius: 6px;
  margin-right: 8px;

  div {
    cursor: pointer;
  }
`
