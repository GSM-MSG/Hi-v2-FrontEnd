import styled from '@emotion/styled'
import { ButtonContainer, PlaceSelectContainer } from '../PlaceSelect/style'

export const ViewReservationModalContainer = styled(PlaceSelectContainer)`
  height: 480px;
`

export const TableCheckBox = styled.div`
  cursor: pointer;
  margin-top: 4px;
  margin-right: 4px;
`

export const ViewReservationDataBox = styled.div`
  width: 100%;
  height: 223px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.8rem;
  border: 1px solid #b1b1b1;
  border-radius: 8px;
  padding: 16px 0 0 16px;
  gap: 15px;
`

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
    column > 1 ? '32px' : column === 0 ? '47px' : '20px'};

  span {
    color: ${({ theme }) => theme.color.Grayscale.gray05};
  }

  p {
    width: ${({ column }) => (column === 2 ? '196px' : '182px')};
    ${({ theme }) => theme.typography.body2.regular};
    color: #0b041e;
    span {
      color: #0b041e;
      cursor: pointer;
    }
    b {
      color: ${({theme}) => theme.color.primary};
      font-weight: 600;
    }
  }
`

export const ViewReservationButtonContainer = styled(ButtonContainer)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  bottom: 6%;
`
