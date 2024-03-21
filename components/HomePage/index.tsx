import HomeSection1 from './Section1'
import HomeSection2 from './Section2'
import HomeSection3 from './Section3'
import HomeSection4 from './Section4'
import * as S from './style'

function HomePage() {
  return (
    <S.HomePageContainer>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </S.HomePageContainer>
  )
}

export default HomePage
