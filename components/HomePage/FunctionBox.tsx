import styled from '@emotion/styled'
import Image from 'next/image'
import HiFunctionIcon1 from '@/assets/png/HiFunctionIcon1.png'
import HiFunctionIcon2 from '@/assets/png/HiFunctionIcon2.png'
import HiFunctionIcon3 from '@/assets/png/HiFunctionIcon3.png'
import { FunctionBoxPropsType } from '@/types/components'

const FunctionBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 2rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  margin-right: 2rem;

  img {
    width: 140px;
    height: 140px;
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
    font-size: 1.025rem;
    width: 9.8rem;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    width: 17rem;
    margin-bottom: 5rem;
    margin-right: 0;
  }
`

function FunctionBox({ number, title, description }: FunctionBoxPropsType) {
  return (
    <FunctionBoxBlock>
      {number === 1 && <Image src={HiFunctionIcon1} alt='Hi 기능1' />}
      {number === 2 && <Image src={HiFunctionIcon2} alt='Hi 기능2' />}
      {number === 3 && <Image src={HiFunctionIcon3} alt='Hi 기능3' />}
      <h3>{title}</h3>
      <p>{description}</p>
    </FunctionBoxBlock>
  )
}

export default FunctionBox
