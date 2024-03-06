import { ArrowIcon, HiCharacter, ScrollMouseIcon } from '@/assets'
import * as S from './style'
import { Button } from '@/components'
import Link from 'next/link'
import TokenManager from '@/apis/TokenManager'
import Image from 'next/image'
import { toast } from 'react-toastify'

function HomeSection1() {
  const tokenManager = new TokenManager()
  return (
    <S.HomeSection1>
      <S.IntroductoryBox>
        <S.IntroductoryTextBox>
          <h2>
            더욱 더 간편해진 <br />
            홈베이스 예약
          </h2>
          <p>매번 불편했던 홈베이스 예약, HI로 쉽고 간편하게 예약해보세요!</p>
          <Button
            width='160px'
            height='48px'
            color='#0066ff'
            fontSize='18px'
            fontWeight='600'
            lineHeight='21.48px'
            borderRadius='8px'
            border='none'
          >
            예약하러 가기
            <ArrowIcon />
          </Button>
        </S.IntroductoryTextBox>
        <S.HiCharacterBox>
          <Image src={HiCharacter} alt='HiCharacter' />
        </S.HiCharacterBox>
      </S.IntroductoryBox>
      <S.ScrollIcon>
        <ScrollMouseIcon />
      </S.ScrollIcon>
    </S.HomeSection1>
  )
}

export default HomeSection1
