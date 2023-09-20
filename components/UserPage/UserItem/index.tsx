import Button from '@/components/common/Button'
import * as S from './style'
import * as SVG from '@/assets/svg'

export default function UserItem() {
  return (
    <S.UserItemContainer>
      <S.UserItemWrraper>
        <SVG.UserProfile />
        <S.UserInfo>
          <S.UserName>2209 서주미</S.UserName>
          <S.UserEmail>s22000@gsm.hs.kr</S.UserEmail>
        </S.UserInfo>
      </S.UserItemWrraper>
      <Button
        width='84px'
        height='36px'
        border='solid 1px #00A441' //#C0C0C0
        borderRadius='8px'
        background='none'
        fontWeight='600'
        color='#00A441' //#C0C0C0
      >
        예약가능 {/* 예약불가 */}
      </Button>
    </S.UserItemContainer>
  )
}
