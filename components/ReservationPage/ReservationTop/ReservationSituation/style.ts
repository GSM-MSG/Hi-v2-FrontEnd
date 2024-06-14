import styled from '@emotion/styled'

export const ReservationSituationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 670px) {
    div {
      display: none;
    }
  }
`

export const SituationText = styled.h1`
  ${({ theme }) => theme.typography.h4.bold};
  line-height: 33.41px;
  color: ${({ theme }) => theme.color.Grayscale.gray09};
  margin-right: 11.2px;
`

export const SituationInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.Background.sub};
  color: ${({ theme }) => theme.color.Grayscale.gray06};
  font-size: 12.8px;
  width: 86.4px;
  height: 28.8px;
  border-radius: 8px;
`
