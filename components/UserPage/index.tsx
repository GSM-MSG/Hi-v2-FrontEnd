import { get, userQueryKeys, userUrl } from '@/apis'
import { useGetRole } from '@/hooks'
import { UserItemListType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Input, PageContainer } from '../commons'
import UserItem from './UserItem'
import * as S from './style'
import { SearchIcon } from '@/assets'

export default function UserPage() {
  const [user, setUser] = useState<string>('')
  const { data, refetch } = useQuery<AxiosResponse<UserItemListType>>({
    queryKey: userQueryKeys.searchUser(),
    queryFn: () => get(userUrl.searchUser(user)),
  })
  const { isAdmin } = useGetRole()
  const router = useRouter()

  useEffect(() => {
    if (!isAdmin) router.push('/')
  }, [isAdmin, router])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }
  return (
    <PageContainer paddingTop='6vh' paddingBottom='4vh'>
      <S.UserTitleContainer>
        <h1>학생정보</h1>
        <S.InputWrapper onSubmit={onSubmit}>
          <Input
            width='320px'
            height='28px'
            border='1px solid #B1B1B1'
            borderRadius='20px'
            placeholder='이름을 입력해 주세요.'
            focus={true}
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <S.SearchIconWrapper onClick={onSubmit}>
            <SearchIcon />
          </S.SearchIconWrapper>
        </S.InputWrapper>
      </S.UserTitleContainer>
      <S.UserItemListContainer>
        {data?.data.map(
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
    </PageContainer>
  )
}
