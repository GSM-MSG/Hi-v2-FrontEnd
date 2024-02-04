import { ArrowIcon, HiCharacter, ScrollMouseIcon } from '@/assets'
import * as S from './style'
import { Button } from '@/components'
import Link from 'next/link'
import TokenManager from '@/apis/TokenManager'
import Image from 'next/image'

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
  )
}

export default HomeSection1
