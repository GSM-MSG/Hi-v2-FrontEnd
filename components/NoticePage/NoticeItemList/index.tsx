import { get, noticeQueryKeys, noticeUrl, userQueryKeys, userUrl } from '@/apis'
import { MyPageType, NoticeItemListType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import NoticeItem from '../NoticeItem'
import * as S from './style'

export default function NoticeItemList() {
  const { data } = useQuery<AxiosResponse<NoticeItemListType[]>>({
    queryKey: noticeQueryKeys.list(),
    queryFn: () => get(noticeUrl.notice()),
  })

  const { data: myData } = useQuery<AxiosResponse<MyPageType>>({
    queryKey: userQueryKeys.my(),
    queryFn: () => get(userUrl.my()),
  })

  const { userId } = myData?.data || ({} as MyPageType)

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
            userId={userId}
          />
        ))}
    </S.NoticeItemListContainer>
  )
}
