import { del, noticeQueryKeys, noticeUrl } from '@/apis'
import { XMark } from '@/assets'
import { NoticeItemType } from '@/types'
import { dateToString } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import * as S from './style'

export default function NoticeItem({
  index,
  noticeId,
  title,
  createdAt,
  user,
}: NoticeItemType) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { mutate } = useMutation<void, AxiosError>({
    mutationKey: noticeQueryKeys.delete(noticeId),
    mutationFn: () => del(noticeUrl.requestId(noticeId)),
    onSuccess: () => {
      toast.success('공지가 삭제되었습니다.')
      queryClient.invalidateQueries({ queryKey: noticeQueryKeys.list() })
    },
    onError: (error) => {
      if (error.response) {
        const status = error.response.status
        if (status === 403) toast.error('권한이 없습니다.')
        else if (status === 404) toast.error('존재하지 않는 글입니다.')
      }
    },
  })

  const onDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    mutate()
  }

  return (
    <S.NoticeItemContainer onClick={() => router.push(`/notice/${noticeId}`)}>
      <S.NoticeItemWrapper>
        <S.NoticeIDXContainer>
          <S.NoticeIDX>{index}</S.NoticeIDX>
        </S.NoticeIDXContainer>
        <S.NoticeTitle>
          {title.length > 60 ? `${title.slice(0, 61)}...` : title}
        </S.NoticeTitle>
        <S.NoticeDate>{dateToString(createdAt)}</S.NoticeDate>
        <S.NoticeUser>{user.name}</S.NoticeUser>
        {user.isWriter && (
          <XMark onClick={onDelete} width='24px' height='24px' />
        )}
      </S.NoticeItemWrapper>
    </S.NoticeItemContainer>
  )
}
