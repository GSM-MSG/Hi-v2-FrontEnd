import React, { useEffect } from 'react'
import * as S from './style'
import UserItem from '../UserItem'
import useFetch from '@/hooks/useFetch'
import { UserItemListType } from '@/types/UserItemListType'

export default function UserItemList() {
  const { fetch, data } = useFetch<UserItemListType>({
    url: '/user/students',
    method: 'get',
  })

  useEffect(() => {
    fetch()
  }, [])

  if (!data) return <div />
  return (
    <S.UserItemListContainer>
      {data.student.map(
        (
          {
            id,
            email,
            name,
            grade,
            classNum,
            number,
            useStatus,
            profileImageUrl,
          },
          idx
        ) => (
          <UserItem
            profileImageUrl={profileImageUrl}
            key={idx}
            id={id}
            email={email}
            name={name}
            grade={grade}
            classNum={classNum}
            number={number}
            useStatus={useStatus}
          />
        )
      )}
    </S.UserItemListContainer>
  )
}