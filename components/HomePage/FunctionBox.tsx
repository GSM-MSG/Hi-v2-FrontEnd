import { HiFunctionIcon1, HiFunctionIcon2, HiFunctionIcon3 } from '@/assets'
import { FunctionBoxPropsType } from '@/types'
import styled from '@emotion/styled'
import Image from 'next/image'

const FunctionBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
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
    ${({ theme }) => theme.typography.title.bold};
    color: ${({ theme }) => theme.color.black};
    line-height: 31.03px;
    margin-top: 1rem;
  }

  p {
    ${({ theme }) => theme.typography.h5.regular};
    color: ${({ theme }) => theme.color.Grayscale.gray08};
    line-height: 27.57px;
    margin-top: 1.3rem;
    width: 200px;
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
