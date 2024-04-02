import styled from '@emotion/styled'
import { ButtonContainer, PlaceSelectContainer } from '../PlaceSelectModal/style'

export const ViewReservationModalContainer = styled(PlaceSelectContainer)`
  height: 475px;
`

export const TitleLeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TableCheckBox = styled.div`
  cursor: pointer;
  margin-top: 4px;
  margin-right: 4px;
`

export const ViewReservationDataWrapper = styled.div<{ isLoading: boolean }>`
  width: 100%;
  height: 223px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.8rem;
  border: 1px solid #b1b1b1;
  border-radius: 8px;
  padding: ${({ isLoading }) => (isLoading ? 'none' : '16px 0 0 16px')};
  gap: 15px;
`

export const ViewReservationButtonContainer = styled(ButtonContainer)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  bottom: 6%;
`
