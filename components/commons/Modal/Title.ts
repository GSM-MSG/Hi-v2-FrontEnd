import styled from '@emotion/styled'

export const TitleBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`

export const TitleTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
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
  color: ${({ theme }) => theme.color.Grayscale.gray09};
  gap: 5px;
  justify-content: space-between;
  ${({ theme }) => theme.typography.title.bold};

  span {
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    background: #0066ff;
  }
`

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.body1.regular};
  line-height: 22px;
  color: ${({ theme }) => theme.color.Grayscale.gray05};
  margin-bottom: 10px;
  letter-spacing: 0.4px;
`
