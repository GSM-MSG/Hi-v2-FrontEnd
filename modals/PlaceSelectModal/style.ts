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

export const SelectButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  button {
    height: 48px;
    ${({ theme }) => theme.typography.body2.medium};
    border-radius: 8px;
    cursor: pointer;
  }
`

export const FloorButton = styled.button<{
  clicked: number
  current_value: number
}>`
  width: 72px;
  background: ${({ clicked, current_value, theme }) =>
    clicked === current_value ? theme.color.primary : 'none'};
  border: 1px solid
    ${({ clicked, current_value, theme }) =>
      clicked === current_value
        ? theme.color.primary
        : theme.color.Grayscale.gray06};
  color: ${({ clicked, current_value, theme }) =>
    clicked === current_value
      ? theme.color.white
      : theme.color.Grayscale.gray06};
`

export const PeriodButton = styled(FloorButton)<{isMonday: boolean}>`
  width: ${({isMonday}) => isMonday ? '64px' : '80px'}
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.8125rem;
  width: 88%;
  display: flex;
  align-items: center;
`
