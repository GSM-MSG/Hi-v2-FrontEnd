import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(4rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const floaty = keyframes`
  0% {
    transform: translateY(2rem);
  }
  
  100% {
    transform: translateY(0);
  }
`

export const HomePageContainer = styled.div`
  width: 100vw;
`

export const HomeSection1 = styled.div`
  width: 100vw;
  padding: 0 18vw;
  height: 43rem;
  background: linear-gradient(90deg, #0026ff 0%, #00d1ff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  color: #00a3ff;

  @media screen and (max-width: 600px) {
    height: 46rem;
  }

  @media screen and (max-width: 400px) {
    height: 50rem;
  }
`

export const IntroductoryBox = styled.div`
  margin: auto auto;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`

export const IntroductoryTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #ffffff;
  animation: ${fadeUp} 1.2s linear 0s;

  h2 {
    margin: 0;
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }

  p {
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 2.3rem;
    letter-spacing: 1px;
  }

  a {
    text-decoration-line: none;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      width: 1rem;
      height: 1rem;
      margin: 0;
      margin-left: 0.3rem;
    }
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    text-align: center;

    h2 {
      font-size: 2.8rem;
    }

    p {
      font-size: 0.98rem;
      width: 210px;
      letter-spacing: 0.7px;
    }
  }
`

export const HiCharacterBox = styled.div`
  animation: ${fadeUp} 1.2s linear 0s;
  img {
    margin-top: 2rem;
    width: 26rem;
    height: 26rem;

    @media screen and (max-width: 1440px) {
      width: 24rem;
      height: 22rem;
    }

    @media screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      margin: 0;
      width: 18rem;
      height: 18rem;
    }
  }
`

export const ScrollIcon = styled.div`
  animation: ${floaty} 1s linear 0s infinite alternate;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const HomeSection2 = styled.div`
  width: 100vw;
  padding: 0 18vw;
  height: 54rem;
  background-color: #f4f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;

  @media screen and (max-width: 600px) {
    height: 88rem;
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
    font-size: 2.3rem;
    color: #000000;
    font-weight: 700;
    margin-bottom: 0.9rem;
    text-align: center;

    span {
      color: #0066ff;
    }
  }

  p {
    color: #6c6c6c;
    font-size: 1.1rem;
    font-weight: 600;
  }
`

export const TalkBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 3.5rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export const HomeSection3 = styled.div`
  width: 100vw;
  padding: 0 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  background-color: #ffffff;
  height: 145rem;

  @media screen and (max-width: 600px) {
    height: 125rem;
  }
`

export const ShowIphoneBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 8rem;
  display: flex;

  img {
    width: 360px;
    height: 1500px;

    &:nth-of-type(1) {
      position: absolute;
      left: 0;
      top: 20rem;
    }

    &:nth-of-type(2) {
      position: absolute;
      right: 0;
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 4rem;
    img {
      width: 340px;

      :nth-of-type(1) {
        display: none;
      }
    }
  }
`

export const HomeSection4 = styled.div`
  width: 100vw;
  padding: 0 18vw;
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  background-color: #f4f8ff;

  @media screen and (max-width: 600px) {
    height: 120rem;
  }
`

export const FunctionIntroductoryBox = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
