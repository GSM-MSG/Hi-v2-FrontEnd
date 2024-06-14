import styled from '@emotion/styled'

export const MemberListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 192px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
