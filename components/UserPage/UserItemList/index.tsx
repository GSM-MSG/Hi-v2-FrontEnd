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
    url: '/user/all',
    method: 'get',
    onSuccess: (data) => {
      setUserList(data.users)
    },
  })

  useEffect(() => {
    ;(async () => await fetch())()
  }, [fetch])

  if (!data) return <></>

  return (
    <S.UserItemListContainer>
      {userList.map(
        (
          {
            userId,
            email,
            name,
            grade,
            classNum,
            number,
            profileImageUrl,
            roles,
            useStatus,
          },
          idx
        ) => (
          <UserItem
            key={idx}
            userId={userId}
            email={email}
            name={name}
            grade={grade}
            classNum={classNum}
            number={number}
            profileImageUrl={profileImageUrl}
            roles={roles}
            useStatus={useStatus}
          />
        )
      )}
    </S.UserItemListContainer>
  )
}
