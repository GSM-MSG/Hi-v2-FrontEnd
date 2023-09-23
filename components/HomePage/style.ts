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
  height: 92vh;
  background: linear-gradient(90deg, #0026ff 0%, #00d1ff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  color: #00a3ff;
`

export const IntroductoryBox = styled.div`
  margin: auto auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
`

export const HiCharacterBox = styled.div`
  animation: ${fadeUp} 1.2s linear 0s;
  svg {
    margin-top: 1.5rem;
    width: 25rem;
    height: 25rem;
  }
`

export const ScrollIcon = styled.div`
  animation: ${floaty} 1s linear 0s infinite alternate;
  margin-bottom: 2rem;
`

export const HomeSection2 = styled.div`
  width: 100vw;
  padding: 0 18vw;
  height: 110vh;
  background-color: #f4f8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
`

export const IntroductoryTextBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;

  h2 {
    font-size: 2rem;
    color: #000000;
    font-weight: 700;
    margin-bottom: 0.9rem;

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

  .talkGirlIcon {
    position: absolute;
    left: 0;
  }

  .talkBoyIcon {
    position: absolute;
    top: 10rem;
    right: 0;
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
`

export const ShowIphoneBox = styled.div`
  margin-top: 8rem;
  width: 100%;
  height: 90rem;
  display: flex;

  svg {
    width: 30rem;
    height: 30rem;
  }

  .IphoneBox1 {
    height: 68rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 16rem;
  }

  .IphoneBox2 {
    height: 68rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const HomeSection4 = styled.div`
  width: 100vw;
  padding: 0 18vw;
  height: 115vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  background-color: #f4f8ff;
`

export const FunctionIntroductoryBox = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
