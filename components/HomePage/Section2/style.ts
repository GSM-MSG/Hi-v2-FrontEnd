import styled from '@emotion/styled'

export const HomeSection2 = styled.div`
  width: 100vw;
  padding: 0 18vw;
  height: 54rem;
  background-color: ${({ theme }) => theme.color.Background.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;

  @media screen and (max-width: 600px) {
    height: 64rem;
    padding-top: 7rem;
  }
`

export const IntroductoryTextBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  margin-top: 0;

  h2 {
    ${({ theme }) => theme.typography.h2.bold};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 0.9rem;
    text-align: center;

    @media screen and (max-width: 700px) {
      font-size: 2.25rem;
    }

    span {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  p {
    color: ${({ theme }) => theme.color.Grayscale.gray07};
    ${({ theme }) => theme.typography.title.semibold};

    @media screen and (max-width: 415px) {
      font-size: 1.25rem;
    }
  }
`

export const TalkBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3.5rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    position: absolute;
    width: 520px;
    height: 280px;

    &:first-of-type {
      left: 0;
    }

    &:last-of-type {
      right: 0;
      top: 12rem;

      @media screen and (max-width: 920px) {
        top: 16rem;
      }
    }

    @media screen and (max-width: 1050px) {
      width: 450px;
      height: auto;
    }

    @media screen and (max-width: 600px) {
      position: static;
      width: 420px;
      height: auto;
      &:last-of-type {
        margin-top: 7rem;
      }
    }

    @media screen and (max-width: 400px) {
      width: 300px;
      height: auto;
      &:last-of-type {
        margin-top: 7rem;
      }
    }
  }
`
