import styled from '@emotion/styled'
import { ButtonContainer, PlaceSelectContainer } from '../PlaceSelect/style'

export const ViewReservationModalContainer = styled(PlaceSelectContainer)`
  height: 480px;
`

export const ViewReservationDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.8rem;
`

export const ViewReservationDataColumn = styled.div<{ name: string }>`
  display: flex;
  align-items: ${({ name }) => (name.length ? 'flex-start' : 'center')};
  justify-content: space-between;
  border-bottom: ${({ name }) => (name.length ? 'none' : '1px solid #ebebeb')};
  padding: 1.2rem 0.3rem;
  width: 100%;

  span {
    color: #6c6c6c;
    font-size: 1.05rem;
  }
`

export const ViewDataBox = styled.div<{ name: string }>`
  display: ${({ name }) => name && 'grid'};
  grid-template-columns: ${({ name }) => name.length && 'repeat(3, 1fr)'};
  grid-template-rows: auto;
  gap: 1.5rem 0.8rem;

  span {
    color: #0066ff;
    font-size: 0.95rem;
  }
`

export const Member = styled.div<{ isRepresentative: boolean }>`
  color: ${({ isRepresentative }) =>
    isRepresentative ? '#FF9B05' : '#9e9e9e'};
  background: none;
  font-size: 0.85rem;
  border-radius: 4px;
  display: flex;
  flex-direction: ${({ isRepresentative }) => isRepresentative && 'column'};
  align-items: center;
  margin-top: ${({ isRepresentative }) => isRepresentative && '-1.33rem'};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const ViewReservationButtonContainer = styled(ButtonContainer)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  bottom: 7%;
`
