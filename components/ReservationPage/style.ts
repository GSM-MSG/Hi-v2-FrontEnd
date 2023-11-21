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
    font-size: 1.5rem;
    font-weight: 700;
    color: #3c3c43;
    margin-right: 0.7rem;
  }

  div {
    background-color: #f5f5f5;
    color: #9e9e9e;
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
