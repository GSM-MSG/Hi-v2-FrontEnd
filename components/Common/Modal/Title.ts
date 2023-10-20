import styled from '@emotion/styled'

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`

export const PageToggleBox = styled.div`
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    background: rgba(0, 102, 255, 0.2);
  }

  .currentToggle {
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    background: #0066ff;
  }
`

export const Title = styled.h3`
  display: flex;
  align-items: flex-start;
  font-size: 1.4rem;
  font-weight: bold;
  color: #3c3c43;
  gap: 5px;

  span {
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    background: #0066ff;
  }
`

export const SubTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: #b1b1b1;
  margin-bottom: 10px;
  letter-spacing: 0.4px;
`
