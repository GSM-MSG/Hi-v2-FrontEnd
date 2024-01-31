import { ArrowIcon, HiCharacter, HiShowIphone1, HiShowIphone2, ScrollMouseIcon } from '@/assets'
import { FunctionBoxList } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../commons'
import FunctionBox from './FunctionBox'
import * as S from './style'
import TokenManager from '@/apis/TokenManager'

function HomePage() {
  const tokenManager = new TokenManager()

  return (
    <S.HomePageContainer>
      <S.HomeSection1>
        <S.IntroductoryBox>
          <S.IntroductoryTextBox>
            <h2>
              더욱 더 간편해진 <br />
              홈베이스 예약
            </h2>
            <p>매번 불편했던 홈베이스 예약, HI로 쉽고 간편하게 예약해보세요!</p>
            <Link href={tokenManager.accessToken ? '/reservation' : '/'}>
              <Button
                width='8rem'
                height='2.4rem'
                color='#0066ff'
                fontWeight='600'
                borderRadius='8px'
                border='none'
                fontSize='0.95rem'
              >
                예약하러 가기
                <ArrowIcon />
              </Button>
            </Link>
          </S.IntroductoryTextBox>
          <S.HiCharacterBox>
            <Image src={HiCharacter} alt='HiCharacter' />
          </S.HiCharacterBox>
        </S.IntroductoryBox>
        <S.ScrollIcon>
          <ScrollMouseIcon />
        </S.ScrollIcon>
      </S.HomeSection1>
      <S.HomeSection2>
        <S.IntroductoryTextBox2>
          <h2>
            교무실에 가서 직접 신청하는 <span>비효율적</span>인 신청방법
          </h2>
          <p>학생들이 불편을 겪고 있어요</p>
        </S.IntroductoryTextBox2>
        <S.TalkBox>
          <div className='HiTalkGirl' />
          <div className='HiTalkBoy' />
        </S.TalkBox>
      </S.HomeSection2>
      <S.HomeSection3>
        <S.IntroductoryTextBox2>
          <h2>
            HI로 <span>쉽고 빠르게</span> 예약해보세요!
          </h2>
          <p>교무실까지 가지 않아도 돼요!</p>
        </S.IntroductoryTextBox2>
        <S.ShowIphoneBox>
          <Image src={HiShowIphone1} alt='Hi Mobile1' />
          <Image src={HiShowIphone2} alt='Hi Mobile2' />
        </S.ShowIphoneBox>
      </S.HomeSection3>
      <S.HomeSection4>
        <S.IntroductoryTextBox2>
          <h2>
            <span>HI에서만</span> 만나볼 수 있는 기능들이에요
          </h2>
          <p>HI의 대표기능 세가지를 소개해 드릴게요!</p>
        </S.IntroductoryTextBox2>
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
    </S.HomePageContainer>
  )
}

export default HomePage
