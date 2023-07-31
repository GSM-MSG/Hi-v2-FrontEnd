import Link from 'next/link'
import * as S from './style'
import * as SVG from '@/assets/svg'
import HiTalkGirl from '@/assets/png/HiTalkGirl.png'
import HiTalkBoy from '@/assets/png/HiTalkBoy.png'
import Image from 'next/image'
import FuntionBox from './FuntionBox'

function HomePage() {
  return (
    <S.HomePageContainer>
      <S.HomeSection1>
        <S.IntroductoryBox>
          <S.IntroductoryTextBox>
            <h1>
              더욱 더 간편해진 <br /> 홈베이스 예약
            </h1>
            <p>매번 불편했던 홈베이스 예약, HI로 쉽고 간편하게 예약해보세요!</p>
            <Link href='/reservation'>예약하러 가기</Link>
          </S.IntroductoryTextBox>
          <SVG.HiCharacter />
        </S.IntroductoryBox>
        <S.ScrollIcon>
          <SVG.ScrollMouseIcon />
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
          <div className='talkGirlIcon'>
            <Image
              src={HiTalkGirl}
              alt='학생들의 불편1'
              width={520}
              height={280}
            />
          </div>
          <div className='talkBoyIcon'>
            <Image
              src={HiTalkBoy}
              alt='학생들의 불편2'
              width={520}
              height={280}
            />
          </div>
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
          <div className='IphoneBox1'>
            <SVG.HiShowIphone2 />
            <SVG.HiShowIphone2 />
          </div>
          <div className='IphoneBox2'>
            <SVG.HiShowIphone2 />
            <SVG.HiShowIphone2 />
          </div>
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
          <FuntionBox
            number={1}
            title='홈베이스 예약'
            description='특정 교시,층,시간을 선택해서 홈베이스를 예약 할 수 있어요!'
          />
          <FuntionBox
            number={2}
            title='홈베이스 관리'
            description='홈베이스를 예약한 인원을 확인하고 관리할 수 있어요!'
          />
          <FuntionBox
            number={3}
            title='자동화'
            description='예약 후에 시간이 지나면 자동으로 예약이 해제돼요!'
          />
        </S.FunctionIntroductoryBox>
      </S.HomeSection4>
    </S.HomePageContainer>
  )
}

export default HomePage
