import { useFetch, useGetRole } from '@/hooks'
import { NoticeItemListType } from '@/types'
import { useEffect } from 'react'
import NoticeItem from '../NoticeItem'
import * as S from './style'

export default function NoticeItemList() {
  const { fetch, data } = useFetch<NoticeItemListType[]>({
    url: '/notice',
    method: 'get',
  })

  const role = useGetRole()

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
          role={role}
        />
      ))}
    </S.NoticeItemListContainer>
  )
}
