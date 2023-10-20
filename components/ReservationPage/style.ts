import styled from '@emotion/styled'
import { TableBox } from './ReservationTableItem/style'

interface ShowCheckedBoxProps {
  disabled?: boolean
}

export const ReservationTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3c3c43;
`

export const ReservationTableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  width: 100%;
  height: 100%;
  margin-top: 1.3rem;
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
