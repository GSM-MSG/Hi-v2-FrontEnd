import styled from '@emotion/styled'
import { ButtonContainer, PlaceSelectContainer } from '../PlaceSelect/style'

export const ViewReservationModalContainer = styled(PlaceSelectContainer)`
  height: 480px;
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
  gap: 20px;
`

export const ViewReservationText = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #0066ff;
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
  font-size: 14px;
  font-weight: 600;
  gap: ${({ column }) =>
    column > 1 ? '32px' : column === 0 ? '47px' : '20px'};

  span {
    color: #b1b1b1;
  }

  p {
    color: #0b041e;
    font-weight: 400;
    width: ${({ column }) => (column === 2 ? '196px' : '182px')};
    line-height: 18px;

    span {
      color: #0b041e;
    }

    b {
      color: #0066ff;
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
