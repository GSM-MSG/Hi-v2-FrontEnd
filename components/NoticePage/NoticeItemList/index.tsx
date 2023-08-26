import * as S from './style'
import NoticeItem from '../NoticeItem'
import useFetch from '@/hooks/useFetch'
import { useEffect } from 'react'
import { NoticeItemType } from '@/types/NoticeItemType'

export default function NoticeItemList() {
  const { fetch, data } = useFetch<NoticeItemType[]>({
    url: '/notice',
    method: 'get',
  })

  useEffect(() => {
    fetch()
  }, [])

  if (!data) return <div />

  return (
    <S.NoticeItemListContainer>
      {data.map(({ noticeId, title, createdAt, user }, index) => (
        <NoticeItem
          key={index}
          noticeId={noticeId}
          title={title}
          createdAt={createdAt}
          user={user}
        />
      ))}
    </S.NoticeItemListContainer>
  )
}
