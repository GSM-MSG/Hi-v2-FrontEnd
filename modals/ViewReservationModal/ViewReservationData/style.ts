import styled from '@emotion/styled'

export const ViewReservationText = styled.h2`
  ${({ theme }) => theme.typography.body1.bold};
  color: ${({ theme }) => theme.color.primary};
`

export const ViewReservationDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const ViewReservationDataColumn = styled.div<{ column: number }>`
  display: flex;
  align-items: flex-start;
  ${({ theme }) => theme.typography.body2.semibold};
  gap: 20px;

  span {
    color: ${({ theme }) => theme.color.Grayscale.gray05};
    width: 66px;
  }

  p {
    ${({ theme }) => theme.typography.body2.regular};
    line-height: 15px;
    color: #0b041e;

    span {
      color: #0b041e;
    }
  }

  .last-content {
    max-height: 60px;
    overflow: auto;
  }
`
