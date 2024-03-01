import * as S from './style'
import { NoticeItemListType, NoticeItemType } from '@/types'
import { dateToString } from '@/utils'
import { useRouter } from 'next/router'
import { XMark } from '@/assets'
import { useMutation, useQuery } from '@tanstack/react-query'
import { del, get, noticeQueryKeys, noticeUrl } from '@/apis'
import { toast } from 'react-toastify'
import { AxiosError, AxiosResponse } from 'axios'

export default function NoticeItem({
  index,
  noticeId,
  title,
  createdAt,
  user,
  role,
}: NoticeItemType) {
  const { refetch: noticeList } = useQuery<AxiosResponse<NoticeItemListType>>({
    queryKey: noticeQueryKeys.list(),
    queryFn: () => get(noticeUrl.notice()),
    enabled: false,
  })

  const { mutate } = useMutation<void, AxiosError>({
    mutationKey: noticeQueryKeys.delete(noticeId),
    mutationFn: () => del(noticeUrl.requestId(noticeId)),
    onSuccess: () => {
      toast.success('공지가 삭제되었습니다.')
    },
    onError: (error) => {
      if (error.response) {
        const status = error.response.status
        if (status === 403) {
          toast.error('권한이 없습니다.')
        } else if (status === 404) {
          toast.error('존재하지 않는 글입니다.')
        }
      }
    },
  })

  const onDelete = async (e: React.MouseEvent) => {
    e.stopPropagation()
    mutate()
    await noticeList()
  }

  const router = useRouter()

  return (
    <S.NoticeItemContainer onClick={() => router.push(`/notice/${noticeId}`)}>
      <S.NoticeItemWrapper>
        <S.NoticeIDXContainer>
          <S.NoticeIDX>{index}</S.NoticeIDX>
        </S.NoticeIDXContainer>
        <S.NoticeTitle>{title}</S.NoticeTitle>
        <S.NoticeDate>{dateToString(createdAt)}</S.NoticeDate>
        <S.NoticeUser>{user.name}</S.NoticeUser>
        {(role.isAdmin || role.isTeacher) && (
          <S.SVG onClick={onDelete}>
            <XMark />
          </S.SVG>
        )}
      </S.NoticeItemWrapper>
    </S.NoticeItemContainer>
  )
}
