import React, { useEffect } from 'react'
import * as S from './style'
import UserItem from '../UserItem'
import useFetch from '@/hooks/useFetch'
import { UserItemListType } from '@/types/UserItemListType'
import { useRecoilState } from 'recoil'
import { UserList } from '@/atoms/atom'

export default function UserItemList() {
  const [userList, setUserList] = useRecoilState(UserList)
  const { fetch, data } = useFetch<UserItemListType>({
    url: '/user/students',
    method: 'get',
    onSuccess: (data) => {
      setUserList(data.student)
    },
  })

  useEffect(() => {
    fetch()
  }, [])

  if (!data) return <div />

  return (
    <S.UserItemListContainer>
      {userList.map(({ useStatus, user }, idx) => (
        <UserItem
          key={idx}
          user={user}
          useStatus={useStatus}
          userlistRefetch={fetch}
        />
      ))}
    </S.UserItemListContainer>
  )
}
