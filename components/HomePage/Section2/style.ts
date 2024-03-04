import styled from "@emotion/styled"

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