import * as I from '@/assets'
import styled from '@emotion/styled'

interface FunctionBoxProps {
  number: number
  title: string
  description: string
}

const FunctionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  width: 15rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem;

  h3 {
    color: #000000;
    font-weight: 600;
    font-size: 1.2rem;
    margin: 0;
  }

  p {
    margin-top: 1.2rem;
    font-weight: 500;
    color: #606060;
    font-size: 0.9rem;
    width: 10.8rem;
    text-align: center;
  }
`

function FuntionBox({ number, title, description }: FunctionBoxProps) {
  return (
    <FunctionBoxContainer>
      {number === 1 && <I.HiFunctionIcon1 />}
      {number === 2 && <I.HiFunctionIcon2 />}
      {number === 3 && <I.HiFunctionIcon3 />}
      <h3>{title}</h3>
      <p>{description}</p>
    </FunctionBoxContainer>
  )
}

export default FuntionBox
