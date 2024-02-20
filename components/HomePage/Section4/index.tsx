import { FunctionBoxList } from '@/constants'
import FunctionBox from '../FunctionBox'
import * as S from './style'
import { IntroductoryTextBox2 } from '../Section2/style'

function HomeSection4() {
  return (
    <S.HomeSection4>
      <IntroductoryTextBox2>
        <h2>
          <span>HI에서만</span> 만나볼 수 있는 기능들이에요
        </h2>
        <p>HI의 대표기능 세가지를 소개해 드릴게요!</p>
      </IntroductoryTextBox2>
      <S.FunctionIntroductoryBox>
        {FunctionBoxList.map((box) => (
          <FunctionBox
            key={box.id}
            number={box.id}
            title={box.title}
            description={box.description}
          />
        ))}
      </S.FunctionIntroductoryBox>
    </S.HomeSection4>
  )
}

export default HomeSection4
