import React, { useEffect } from 'react'
import * as S from './style'
import UserItem from '../UserItem'
import { useFetch, useGetRole } from '@/hooks'
import { UserItemListType } from '@/types/components'
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

  const role = useGetRole()

  useEffect(() => {
    ;(async () => await fetch())()
  }, [])

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
            role={role}
          />
        )
      )}
    </S.UserItemListContainer>
  )
}
