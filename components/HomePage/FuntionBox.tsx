import styled from '@emotion/styled'
import HiFunctionIcon1 from '@/assets/png/HiFunctionIcon1.png'
import HiFunctionIcon2 from '@/assets/png/HiFunctionIcon2.png'
import HiFunctionIcon3 from '@/assets/png/HiFunctionIcon3.png'
import Image from 'next/image'
import { FunctionBoxProps } from '@/types/components/FunctionBox'

const FunctionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  width: 18.7rem;
  height: 23.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 2rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

  img {
    margin-left: 1.2rem;
  }

  h3 {
    color: #000000;
    font-weight: 700;
    font-size: 1.295rem;
    margin-top: 1rem;
  }

  p {
    margin-top: 1.3rem;
    font-weight: 400;
    color: #606060;
    font-size: 1rem;
    width: 10.8rem;
    text-align: center;
  }
`

function FuntionBox({ number, title, description }: FunctionBoxProps) {
  return (
    <FunctionBoxContainer>
      {number === 1 && (
        <Image src={HiFunctionIcon1} alt='Hi 기능1' width={130} height={120} />
      )}
      {number === 2 && (
        <Image src={HiFunctionIcon2} alt='Hi 기능2' width={130} height={120} />
      )}
      {number === 3 && (
        <Image src={HiFunctionIcon3} alt='Hi 기능3' width={130} height={120} />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </FunctionBoxContainer>
  )
}

export default FuntionBox
