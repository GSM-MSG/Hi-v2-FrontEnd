import styled from '@emotion/styled'

export const NoticeTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    ${({theme}) => theme.typography.h4.bold};
    color: ${({theme}) => theme.color.Grayscale.gray09};
    line-height: 33.41px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    a {
      text-decoration: none;
    }
  }
`
