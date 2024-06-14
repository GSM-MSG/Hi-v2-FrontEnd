import styled from '@emotion/styled'

export const MemberBox = styled.div`
  width: 100%;
  background: none;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 1.8rem 1rem;
  border-radius: 8px;

  &:hover {
    background: #f7f7f7;
  }
`

export const MemberContentsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    border-radius: 50%;
  }
`

export const InfoBox = styled.span`
  ${({ theme }) => theme.typography.body1.medium};
  font-size: 16px;
  color: ${({ theme }) => theme.color.Grayscale.gray08};
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
