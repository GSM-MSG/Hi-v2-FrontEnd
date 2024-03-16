import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const HomeSection3 = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const DescriptionContainer = styled.div<{ flexEnd?: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  ${({ flexEnd }) =>
    flexEnd &&
    css`
      justify-content: flex-end;
    `}

  img {
    height: auto;
  }

  @media screen and (max-width: 1384px) {
    img {
      width: 80%;
      height: auto;
    }
  }

  @media screen and (max-width: 1060px) {
    img {
      width: 50%;
      height: auto;
    }
  }

  @media screen and (max-width: 930px) {
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;

    img {
      display: none;
    }
  }
`

export const IntroductoryTextBox3 = styled.div<{
  marginRight?: boolean
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 8vw;

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin: 0;
      margin-right: 8vw;
    `}

  h2 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.color.black};
    font-weight: 700;
    white-space: nowrap;

    span {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  p {
    color: ${({ theme }) => theme.color.Grayscale.gray07};
    font-size: 1.1rem;
    font-weight: 600;
  }

  @media screen and (max-width: 930px) {
    margin: 0;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 430px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`
