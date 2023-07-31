import styled from '@emotion/styled'

export const HomePageContainer = styled.div`
  width: 100vw;
`

export const HomeSection1 = styled.div`
  width: 100vw;
  height: 36.5rem;
  background: linear-gradient(to right, #4200ff, #00d1ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
`

export const IntroductoryBox = styled.div`
  width: 56rem;
  display: flex;
  justify-content: space-between;

  svg {
    width: 25rem;
    height: 25rem;
  }
`

export const IntroductoryTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #ffffff;

  h1 {
    margin: 0;
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 40px;
  }

  a {
    padding: 10px;
    background-color: #ffffff;
    font-size: 0.9rem;
    color: #0066ff;
    text-decoration: none;
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: 600;
  }
`

export const ScrollIcon = styled.div`
  margin-top: 60px;
  svg {
    animation: floatyAnimation 1s linear 0s infinite alternate;
  }

  @keyframes floatyAnimation {
    0% {
      margin-top: 0;
    }

    100% {
      margin-top: 18px;
    }
  }
`

export const HomeSection2 = styled.div`
  width: 100vw;
  height: 42rem;
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

  h2 {
    font-size: 1.8rem;
    color: #000000;
    font-weight: 600;
    margin-bottom: 0.5rem;

    span {
      color: #0066ff;
    }
  }

  p {
    color: #6c6c6c;
    font-size: 1rem;
    font-weight: 600;
  }
`

export const TalkBox = styled.div`
  display: flex;
  width: 58rem;
  position: relative;

  svg {
    width: 30rem;
    height: 20rem;
  }

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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  background-color: #ffffff;
`

export const ShowIphoneBox = styled.div`
  margin-top: 8rem;
  width: 60rem;
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
  width: 100rem;
  height: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  background-color: #f4f8ff;
`

export const FunctionIntroductoryBox = styled.div`
  margin-top: 4rem;
  width: 60rem;
  display: flex;
  justify-content: space-between;
`
