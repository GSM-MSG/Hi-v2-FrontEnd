import styled from '@emotion/styled'

interface ShowCheckedBoxProps {
  disabled?: boolean
}

export const ReservationTitleContainer = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3c3c43;
`

export const ReservationTableContainer = styled.div`
  margin-top: 1.4rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const TableBox = styled.div`
  position: relative;
  border: 1px solid #0066ff;
  background: rgba(0, 102, 255, 0.04);
  border-radius: 1.2rem;
  height: 10.7rem;
  width: 31.5vw;
  padding: 1.5rem;
  margin-bottom: 1.2rem;

  h2 {
    color: #606060;
    font-weight: 600;
    font-size: 1.4rem;
    margin: 0.6rem 0;
  }

  p {
    color: #9e9e9e;
    font-size: 0.935rem;
    font-weight: 400;
  }

  span {
    float: right;
    margin-top: 1rem;
    color: #0066ff;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const DisabledTableBox = styled(TableBox)`
  border: 1px solid #9e9e9e;
  background: none;

  a {
    float: right;
    margin-top: 1rem;
    color: #9e9e9e;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ShowCheckedBox = styled.div<ShowCheckedBoxProps>`
  border-radius: 20px;
  border: ${({ disabled }) =>
    disabled ? '1px solid #9e9e9e' : '1px solid #0066ff'};
  background: ${({ disabled }) =>
    disabled ? 'rgba(192,192,192,0.12)' : ' rgba(0, 102, 255, 0.08)'};
  width: 3.6rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.852rem;
  font-weight: 400;
  color: ${({ disabled }) => (disabled ? '#9e9e9e' : '#0066ff')};
`
