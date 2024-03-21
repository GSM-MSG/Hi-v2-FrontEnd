import styled from '@emotion/styled'

export const PageContainer = styled.div`
  width: 100vw;
  min-height: calc(100vh - 7.8rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
`

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vh;
`
export const ProfileImg = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  border-radius: 50%;

  svg {
    width: 100px;
    height: 100px;
  }

  img {
    border-radius: 50%;
  }
`

export const NameContainer = styled.div`
  display: flex;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 2vh;

  span:nth-of-type(1) {
    ${({ theme }) => theme.typography.h4.bold};
  }
`

export const ReservationState = styled.span<{ buttonColor: string }>`
  width: auto;
  white-space: nowrap;
  position: absolute;
  left: 85px;
  border: ${(props) => `1.2px solid ${props.buttonColor}`};
  border-radius: 40px;
  padding: 4px 6px;
  color: ${(props) => props.buttonColor};
  ${({ theme }) => theme.typography.caption.medium};
`

export const Email = styled.span`
  color: ${({ theme }) => theme.color.Grayscale.gray06};
  margin-top: 1vh;
  ${({ theme }) => theme.typography.h5.regular};
`

export const ReservationWrapper = styled.div`
  width: 580px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 30px;

  @media screen and (max-width: 645px) {
    width: 500px;
  }

  @media screen and (max-width: 540px) {
    width: 400px;
  }

  @media screen and (max-width: 425px) {
    width: 300px;
  }
`

export const ReservationTitle = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.Grayscale.gray03};

  span:nth-of-type(1) {
    ${({ theme }) => theme.typography.title.semibold};
  }

  span:nth-of-type(2) {
    border: 1.2px solid ${({ theme }) => theme.color.orange};
    border-radius: 40px;
    padding: 4px 6px;
    color: ${({ theme }) => theme.color.orange};
    ${({ theme }) => theme.typography.caption.medium};
  }
`

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
