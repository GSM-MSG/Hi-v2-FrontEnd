import styled from '@emotion/styled'

export const CompletedContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const ShowCompleted = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  height: 9.2rem;
  justify-content: space-between;

  h2 {
    ${({ theme }) => theme.typography.title.regular};
    letter-spacing: -2px;
    color: ${({ theme }) => theme.color.black};
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`
