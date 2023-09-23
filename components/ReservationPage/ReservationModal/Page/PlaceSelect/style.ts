import styled from '@emotion/styled'

export const PlaceSelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const PlaceSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;

  span {
    font-weight: 600;
    font-size: 0.9rem;
    color: #191919;
    margin-bottom: 12px;
  }
`

export const FloorSelectButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12.5vw;
`

export const PeriodSelectButtonBox = styled(FloorSelectButtonBox)`
  width: 21vw;
`

export const FloorButton = styled.button<{
  clicked: number
  current_value: number
}>`
  width: 3.8vw;
  height: 2.9rem;
  background: ${({ clicked, current_value }) =>
    clicked === current_value ? '#0066ff' : 'none'};
  border: 1px solid #0066ff;
  border-radius: 8px;
  color: ${({ clicked, current_value }) =>
    clicked === current_value ? '#ffffff' : '#0066ff'};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`

export const PeriodButton = styled(FloorButton)`
  width: 4.9vw;
  font-size: 0.885rem;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8.7rem;
`
