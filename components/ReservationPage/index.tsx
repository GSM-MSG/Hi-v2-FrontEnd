import { IsRModal } from '@/atoms/atom'
import * as S from './style'
import { useRecoilValue } from 'recoil'
import ReservationModal from './ReservationModal'
import PageContainer from '../common/PageContainer'
import Link from 'next/link'

function ReservationPage() {
  const isRModal = useRecoilValue(IsRModal)

  return (
    <PageContainer paddingTop='5vh' paddingBottom='5vh' background='#ffffff'>
      <S.ReservationTitleContainer>📋예약현황</S.ReservationTitleContainer>
      <S.ReservationTableContainer>
        <S.TableBox>
          <S.ShowCheckedBox>
            <small>예약가능</small>
          </S.ShowCheckedBox>
          <h2>1번 테이블</h2>
          <p>예약 가능 합니다.</p>
          <span>예약하기</span>
        </S.TableBox>
        <S.DisabledTableBox>
          <S.ShowCheckedBox disabled>
            <small>예약불가</small>
          </S.ShowCheckedBox>
          <h2>2번 테이블</h2>
          <p>김하온 서주미 이태랑 김희망 이운린</p>
          <Link href={`/reservation/detail/1234`}>예약조회</Link>
        </S.DisabledTableBox>
        <S.TableBox>
          <S.ShowCheckedBox>
            <small>예약가능</small>
          </S.ShowCheckedBox>
          <h2>1번 테이블</h2>
          <p>예약 가능 합니다.</p>
          <span>예약하기</span>
        </S.TableBox>
        <S.DisabledTableBox>
          <S.ShowCheckedBox disabled>
            <small>예약불가</small>
          </S.ShowCheckedBox>
          <h2>2번 테이블</h2>
          <p>김하온 서주미 이태랑 김희망 이운린</p>
          <Link href={`/reservation/detail/1234`}>예약조회</Link>
        </S.DisabledTableBox>
        <S.TableBox>
          <S.ShowCheckedBox>
            <small>예약가능</small>
          </S.ShowCheckedBox>
          <h2>1번 테이블</h2>
          <p>예약 가능 합니다.</p>
          <span>예약하기</span>
        </S.TableBox>
        <S.DisabledTableBox>
          <S.ShowCheckedBox disabled>
            <small>예약불가</small>
          </S.ShowCheckedBox>
          <h2>2번 테이블</h2>
          <p>김하온 서주미 이태랑 김희망 이운린</p>
          <Link href={`/reservation/detail/1234`}>예약조회</Link>
        </S.DisabledTableBox>
      </S.ReservationTableContainer>
      {isRModal && <ReservationModal />}
    </PageContainer>
  )
}

export default ReservationPage
