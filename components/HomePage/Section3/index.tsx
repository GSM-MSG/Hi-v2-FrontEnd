import { DescriptionImg1, DescriptionImg2 } from '@/assets'
import Image from 'next/image'
import * as S from './style'

export default function HomeSection3() {
  return (
    <S.HomeSection3>
      <S.DescriptionContainer>
        <Image src={DescriptionImg1} alt='hi' width={925} />
        <S.IntroductoryTextBox3 marginRight>
          <h2>
            HI로 <span>쉽고 빠르게</span> 예약해보세요!
          </h2>
          <p>교무실까지 가지 않아도 쉽고 빠르게 예약할 수 있어요</p>
        </S.IntroductoryTextBox3>
      </S.DescriptionContainer>
      <S.DescriptionContainer flexEnd>
        <S.IntroductoryTextBox3>
          <h2>
            <span>내가 원하는</span> 조건으로
          </h2>
          <p>층, 교시와 같은 상세정보를 직접 선택할 수 있어요.</p>
        </S.IntroductoryTextBox3>
        <Image src={DescriptionImg2} alt='hi' width={1058} />
      </S.DescriptionContainer>
    </S.HomeSection3>
  )
}