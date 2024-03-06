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

export const HomeSection1 = styled.div`
  width: 100vw;
  padding: 0 18vw;
  height: 49rem;
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
    letter-spacing: 2%;
    ${({ theme }) => theme.typography.h1.semibold};
    line-height: 64px;
  }

  p {
    margin-top: 1.5rem;
    margin-bottom: 2.3rem;
    font-size: 20px;
    line-height: 23.87px;
  }
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

  @media screen and (max-width: 600px) {
    align-items: center;
    text-align: center;

    h2 {
      font-size: 2.8rem;
    }

    p {
      font-size: 0.9rem;
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
