import * as S from './style'

interface Props {
  isLoading: boolean
  length: number | undefined
}

export default function NotMemberText({ isLoading, length }: Props) {
  return (
    <>
   {isLoading ? (
        <S.NotMemberContainer>
          <span>학생정보를 찾는 중입니다.</span>
        </S.NotMemberContainer>
      ) : length === 0 && (
        <S.NotMemberContainer>
          <span>학생정보를 찾을 수 없습니다.</span>
        </S.NotMemberContainer>
    )}
    </>
  )
}