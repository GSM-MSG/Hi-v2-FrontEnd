import styled from '@emotion/styled'

export const TableBox = styled.div<{ reserved: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 30.5rem;
  height: 11rem;
  background-color: ${({ reserved }) =>
    reserved ? 'none' : 'rgba(0, 102, 255, 0.04)'};
  border: 1px solid ${({ reserved }) => (reserved ? '#b1b1b1' : '#0066ff')};
  border-radius: 12px;
  padding: 1.5rem;

  span {
    margin-top: 7rem;
    cursor: pointer;
    color: ${({ reserved }) => (reserved ? '#9e9e9e' : '#0066ff')};

    &:hover {
      text-decoration: underline;
    }
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
    font-size: 0.7rem;
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
    font-size: 1.3rem;
    color: #606060;
    margin-bottom: 0.7rem;
  }

  span {
    margin-top: 0;
    color: ${({ reserved }) => (reserved ? '#6c6c6c' : '#9e9e9e')};
    letter-spacing: -1px;
    font-weight: 500;
    font-size: 1rem;
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
