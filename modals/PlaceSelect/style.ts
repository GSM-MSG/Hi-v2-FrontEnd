import styled from '@emotion/styled'

export const PlaceSelectContainer = styled.div`
  position: relative;
  width: 400px;
  height: 430px;
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
`

export const PlaceSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;

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
  width: 13rem;
`

export const PeriodSelectButtonBox = styled(FloorSelectButtonBox)`
  width: 20rem;
`

export const FloorButton = styled.button<{
  clicked: number
  current_value: number
}>`
  width: 4rem;
  height: 2.8rem;
  background: ${({ clicked, current_value }) =>
    clicked === current_value ? '#0066ff' : 'none'};
  border: 1px solid
    ${({ clicked, current_value }) =>
      clicked === current_value ? '#0066ff' : '#9E9E9E'};
  border-radius: 8px;
  color: ${({ clicked, current_value }) =>
    clicked === current_value ? '#ffffff' : '#9E9E9E'};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`

export const PeriodButton = styled(FloorButton)`
  width: 4.8rem;
  font-size: 0.885rem;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10%;
  width: 88%;
  display: flex;
  align-items: center;
`
