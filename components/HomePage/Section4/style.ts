import styled from '@emotion/styled'

export const HomeSection4 = styled.div`
  width: 100vw;
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  background-color: ${({ theme }) => theme.color.Background.main};

  @media screen and (max-width: 660px) {
    height: 120rem;
  }
`

export const FunctionIntroductoryBox = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`
