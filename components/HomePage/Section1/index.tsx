import TokenManager from '@/apis/TokenManager'
import { ArrowIcon, HiCharacter, ScrollMouseIcon } from '@/assets'
import { Button } from '@/components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as S from './style'
import { toast } from 'react-toastify'

function HomeSection1() {
  const tokenManager = new TokenManager()
  const router = useRouter()
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
            height='45px'
            color='#0066ff'
            fontSize='16.5px'
            fontWeight='600'
            lineHeight='21.48px'
            borderRadius='8px'
            border='none'
            onClick={() =>
              tokenManager.accessToken
                ? router.push('/reservation')
                : toast.info('로그인 후에 이용해 주세요')
            }
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
