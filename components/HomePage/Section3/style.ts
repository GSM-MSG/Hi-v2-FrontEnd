import styled from '@emotion/styled'

export const HomeSection3 = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2431px;
  padding: 388px 0;
  gap: 396px;

  @media screen and (max-width: 600px) {
    height: 125rem;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 240px;

  img {
    z-index: 9;
    box-shadow: 0px 8px 30px 0px rgba(112, 144, 176, 0.12);
  }
`

export const Circle1 = styled.div`
  position: absolute;
  width: 597px;
  height: 595px;
  background-color: #f0f5ff;
  border-radius: 50%;
  top: 9%;
  left: -14%;
`

export const Circle2 = styled.div`
   position: absolute;
  width: 553px;
  height: 551px;
  background-color: #f0f5ff;
  border-radius: 50%;
  bottom: 17%;
  right: 20%;
`

export const IntroductoryTextBox3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  h2 {
    font-size: 2.3rem;
    color: #000000;
    font-weight: 700;
    white-space: nowrap;

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
