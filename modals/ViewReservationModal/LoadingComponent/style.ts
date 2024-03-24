import styled from '@emotion/styled'

export const LoadingViewReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin: auto;

  span {
    ${({ theme }) => theme.typography.body2.semibold};
    color: ${({ theme }) => theme.color.Grayscale.gray04};
  }
`
