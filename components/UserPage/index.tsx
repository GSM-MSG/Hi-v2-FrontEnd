import { get, userQueryKeys, userUrl } from '@/apis'
import { SearchIcon } from '@/assets'
import { useGetRole } from '@/hooks'
import { UserItemListType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { Input, PageContainer } from '../commons'
import UserItem from './UserItem'
import * as S from './style'

export default function UserPage() {
  const { isStudent } = useGetRole()
  const [user, setUser] = useState<string>('')
  const router = useRouter()
  const { data, refetch } = useQuery<AxiosResponse<UserItemListType>>({
    queryKey: userQueryKeys.searchUser(),
    queryFn: () => get(userUrl.searchUser(user)),
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    refetch()
  }

  useEffect(() => {
    if (isStudent) {
      router.push('/')
    }
  }, [isStudent])

  return (
    <PageContainer paddingTop='6vh' paddingBottom='4vh'>
      <S.UserTitleContainer>
        <h1>학생정보</h1>
        <S.InputWrapper onSubmit={onSubmit}>
          <Input
            width='320px'
            height='40px'
            border='1px solid #B1B1B1'
            borderRadius='20px'
            placeholder='이름을 입력 해주세요.'
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
              role,
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
              role={role}
              useStatus={useStatus}
            />
          )
        )}
      </S.UserItemListContainer>
    </PageContainer>
  )
}
