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
    ${({ theme }) => theme.typography.h4.bold};
    line-height: 33.41px;
    color: ${({ theme }) => theme.color.Grayscale.gray09};
    margin-right: 11.2px;
  }

  div {
    background-color: ${({ theme }) => theme.color.Background.sub};
    color: ${({ theme }) => theme.color.Grayscale.gray06};
    font-size: 12.8px;
    width: 86.4px;
    height: 28.8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.4rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 670px){
    div {
      display: none;
    }
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
    ${({ theme }) => theme.typography.body1.regular};
    border-radius: 8px;
    background-color: ${({theme}) => theme.color.white};

    &:hover {
      color: ${({theme}) => theme.color.white};
    }
  }

  @media screen and (max-width: 450px) {
    button {
      &:nth-child(2) {
        display: none;
      }
    }
  }
`
