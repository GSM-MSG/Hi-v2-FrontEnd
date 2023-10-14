import * as S from './style'
import NoticeItem from '../NoticeItem'
import useFetch from '@/hooks/useFetch'
import { useEffect } from 'react'
import { NoticeItemListType } from '@/types/NoticeItemListType'

export default function NoticeItemList() {
  const { fetch, data } = useFetch<NoticeItemListType[]>({
    url: '/notice',
    method: 'get',
  })

  useEffect(() => {
    ;(async () => await fetch())()
  }, [fetch])

  if (!data) return <div />

  return (
    <S.NoticeItemListContainer>
      {data.map(({ index, noticeId, title, createdAt, user }, idx) => (
        <NoticeItem
          index={index}
          key={idx}
          noticeId={noticeId}
          title={title}
          createdAt={createdAt}
          user={user}
          noticeList={fetch}
        />
      ))}
    </S.NoticeItemListContainer>
  )
}
