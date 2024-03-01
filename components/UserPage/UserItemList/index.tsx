import React, { useEffect } from 'react'
import * as S from './style'
import UserItem from '../UserItem'
import { useGetRole } from '@/hooks'
import { UserItemListType } from '@/types/components'
import { useRecoilState } from 'recoil'
import { UserList } from '@/atoms'
import { useMutation } from '@tanstack/react-query'
import { get, userQueryKeys, userUrl } from '@/apis'
import { AxiosResponse } from 'axios'

export default function UserItemList() {
  const [userList, setUserList] = useRecoilState(UserList)

  const { mutate } = useMutation<AxiosResponse<UserItemListType>>({
    mutationKey: userQueryKeys.list(),
    mutationFn: () => get(userUrl.all()),
    onSuccess: (data) => setUserList(data.data.users),
  })

  const role = useGetRole()

  useEffect(() => {
    mutate()
  }, [])

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
