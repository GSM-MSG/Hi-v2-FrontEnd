import styled from '@emotion/styled'

export const TableBox = styled.div<{ reserved: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 31.5vw;
  height: 11rem;
  background-color: ${({ reserved }) =>
    reserved ? 'none' : 'rgba(0, 102, 255, 0.04)'};
  border: 1px solid
    ${({ reserved, theme }) =>
      reserved ? theme.color.Grayscale.gray05 : theme.color.primary};
  border-radius: 12px;
  padding: 1.5rem;

  span {
    color: ${({ reserved, theme }) =>
      reserved ? theme.color.Grayscale.gray06 : theme.color.primary};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 680px) {
    width: 28rem;
  }

  @media screen and (max-width: 400px) {
    width: 20rem;
  }
`

export const TableInfoBox = styled.div<{
  reserved: boolean
  show_detail_name: boolean
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.typography.caption.regular};
    line-height: 14.32px;
    width: 3.5rem;
    height: 1.5rem;
    color: ${({ reserved }) => (reserved ? '#929292' : '#0066ff')};
    background-color: ${({ reserved }) =>
      reserved ? 'rgba(192, 192, 192, 0.12)' : 'rgba(0, 102, 255, 0.08)'};
    border: 1px solid ${({ reserved }) => (reserved ? '#9e9e9e' : '#0066ff')};
    border-radius: 100px;
    margin-bottom: 0.8rem;
  }

  h2 {
    ${({ theme }) => theme.typography.title.bold};
    color: ${({ theme }) => theme.color.Grayscale.gray08};
    line-height: 28.64px;
    margin-bottom: 0.7rem;
  }

  span {
    ${({ theme }) => theme.typography.body1.medium};
    margin-top: 0;
    color: ${({ reserved, theme }) =>
      reserved ? theme.color.Grayscale.gray07 : theme.color.Grayscale.gray06};
    letter-spacing: -1px;
    cursor: ${({ reserved }) => !reserved && 'default'};
    &:hover {
      text-decoration: none;
    }

    svg {
      width: 12px;
      height: 12px;
      margin-left: 4px;
      transform: ${({ show_detail_name }) =>
        show_detail_name ? 'rotate(270deg)' : 'rotate(180deg)'};
    }
  }
`

export const ShowDetailName = styled.span`
  margin-top: 4.8px;
  color: ${({ theme }) => theme.color.Grayscale.gray05};
`
