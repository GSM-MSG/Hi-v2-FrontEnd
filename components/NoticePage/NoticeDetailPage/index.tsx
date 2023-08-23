import PageContainer from '@/components/common/PageContainer'
import * as S from './style'
import * as SVG from '../../../assets/svg'
import Link from 'next/link'

export default function NoticeDetailPage() {
  return (
    <PageContainer
      background='#F5F5F5'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <S.DetailContainer>
        <Link href='/notice'>
          <SVG.BackArrowIcon />
        </Link>
        <S.DetailWrapper>
          <S.DetailTitle>홈베이스 사용금지 안내</S.DetailTitle>
          <S.DetailInfo>작성일 : 2023.01.01 작성자 : 김하온</S.DetailInfo>
          <S.DetailContent>
            23002030203일동안 학부모 회의로 인해 홈베이스 사용을 금지하고자
            합니다. 회의는 반에서 진행해주시기 바랍니다. 감사합니다.
            23002030203일동안 학부모 회의로 인해 홈베이스 사용을 금지하고자
            합니다. 회의는 반에서 진행해주시기 바랍니다. 감사합니다.
            23002030203일동안 학부모 회의로 인해 홈베이스 사용을 금지하고자
            합니다. 회의는 반에서 진행해주시기 바랍니다. 감사합니다.
          </S.DetailContent>
        </S.DetailWrapper>
      </S.DetailContainer>
    </PageContainer>
  )
}
