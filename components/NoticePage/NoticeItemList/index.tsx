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
    fetch()
  }, [])

  if (!data) return <div />

  console.log(data)

  return (
    <S.NoticeItemListContainer>
      {data.map(({ index, noticeId, title, createdAt, user }, idx) => (
        <NoticeItem
          index={index}
          key={index}
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
