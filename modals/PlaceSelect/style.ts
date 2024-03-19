import styled from '@emotion/styled'

export const PlaceSelectContainer = styled.div`
  position: relative;
  width: 416px;
  height: 488px;
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
    ${({ theme }) => theme.typography.body1.regular};
    line-height: 32px;
    color: ${({ theme }) => theme.color.Grayscale.gray08};
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
  background: ${({ clicked, current_value, theme }) =>
    clicked === current_value ? theme.color.primary : 'none'};
  border: 1px solid
    ${({ clicked, current_value, theme }) =>
      clicked === current_value
        ? theme.color.primary
        : theme.color.Grayscale.gray06};
  border-radius: 8px;
  color: ${({ clicked, current_value, theme }) =>
    clicked === current_value
      ? theme.color.white
      : theme.color.Grayscale.gray06};
  ${({ theme }) => theme.typography.body2.medium};
  cursor: pointer;
`

export const PeriodButton = styled(FloorButton)`
  width: 4.8rem;
  font-size: 0.885rem;
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.8125rem;
  width: 88%;
  display: flex;
  align-items: center;
`
