import styled from "@emotion/styled"

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
  gap: ${({ column }) =>
    column > 1 ? '32px' : column === 0 ? '53px' : '20px'};

  span {
    color: ${({ theme }) => theme.color.Grayscale.gray05};
  }

  p {
    width: ${({ column }) => (column === 2 ? '196px' : '182px')};
    ${({ theme }) => theme.typography.body2.regular};
    color: #0b041e;
    span {
      color: #0b041e;
    }
  }
`