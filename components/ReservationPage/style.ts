import styled from '@emotion/styled'

export const ReservationTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ReservationTitle = styled.div`
  display: flex;
  align-items: center;

  h2 {
    ${({theme}) => theme.typography.h4.bold};
    line-height: 33.41px;
    color: ${({ theme }) => theme.color.Grayscale.gray09};
    margin-right: 0.7rem;
  }

  div {
    background-color: #f5f5f5;
    color: ${({ theme }) => theme.color.Grayscale.gray06};
    font-size: 0.8rem;
    width: 5.4rem;
    height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.4rem;
    border-radius: 8px;
  }
`

export const ReservationTableContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  width: 100%;
  height: 100%;
  margin-top: 1.3rem;

  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    width: 76px;
    height: 38px;
    ${({ theme }) => theme.typography.body1.regular};
  }
`
