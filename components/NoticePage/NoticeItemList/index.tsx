import { get, noticeQueryKeys, noticeUrl } from '@/apis'
import { NoticeItemListType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import NoticeItem from '../NoticeItem'
import * as S from './style'

export default function NoticeItemList() {
  const { data } = useQuery<AxiosResponse<NoticeItemListType[]>>({
    queryKey: noticeQueryKeys.list(),
    queryFn: () => get(noticeUrl.notice()),
  })

  return (
    <S.NoticeItemListContainer>
      {data &&
        Array.isArray(data.data) &&
        data.data.map(({ index, noticeId, title, createdAt, user }, idx) => (
          <NoticeItem
            key={idx}
            index={index}
            noticeId={noticeId}
            title={title}
            createdAt={createdAt}
            user={user}
          />
        ))}
    </S.NoticeItemListContainer>
  )
}
