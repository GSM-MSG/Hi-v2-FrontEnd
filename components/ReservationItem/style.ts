import styled from '@emotion/styled'

export const Reservation = styled.div`
  height: 120px;
  border: 1.5px solid #0066ff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .tableNum {
    color: ${({ theme }) => theme.color.primary};
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
  }

  .info {
    ${({ theme }) => theme.typography.body2.regular};
    color: ${({ theme }) => theme.color.Grayscale.gray06};
  }
`

export const NameWrapper = styled.span<{ showDetailName: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
    margin-left: 4px;
    transform: ${(props) =>
      props.showDetailName ? 'rotate(270deg)' : 'rotate(180deg)'};
  }
`

export const Name = styled.div`
  ${({ theme }) => theme.typography.body1.medium};
  display: flex;
  align-items: center;
  justify-content: unset;
`

export const DetailName = styled.span`
  ${({ theme }) => theme.typography.caption.medium};
  color: ${({ theme }) => theme.color.Grayscale.gray06};
  margin-top: 4px;
`
