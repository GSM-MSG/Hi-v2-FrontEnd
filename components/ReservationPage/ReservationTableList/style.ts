import styled from '@emotion/styled'

export const LoadingText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.Grayscale.gray07};
  ${({ theme }) => theme.typography.body1};
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
