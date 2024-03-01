import { get, userQueryKeys, userUrl } from '@/apis'
import { UserList } from '@/atoms'
import { useGetRole } from '@/hooks'
import { UserItemListType } from '@/types/components'
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import { Input, PageContainer } from '../commons'
import UserItemList from './UserItemList'
import * as S from './style'
import { SearchIcon } from '@/assets'

export default function UserPage() {
  const form = useForm({ defaultValues: { user: '' } })
  const { register, watch, handleSubmit } = form
  const setUserList = useSetRecoilState(UserList)

  const { mutate } = useMutation({
    mutationKey: userQueryKeys.searchUser(),
    mutationFn: (keyword: string) =>
      get<AxiosResponse<UserItemListType>>(userUrl.searchUser(keyword)),
    onSuccess: (data) => setUserList(data.data.users),
  })
  const { isStudent } = useGetRole()
  const router = useRouter()

  useEffect(() => {
    if (isStudent) router.push('/')
  }, [isStudent, router])

  const onSubmit: SubmitHandler<{ user: string }> = (data) => mutate(data.user)

  return (
    <PageContainer paddingTop='6vh' paddingBottom='4vh'>
      <S.UserTitleContainer>
        <h1>학생정보</h1>
        <S.InputWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input
            width='320px'
            height='28px'
            border='1px solid #B1B1B1'
            borderRadius='20px'
            placeholder='이름을 입력해 주세요.'
            focus={true}
            {...register('user')}
          />
          <S.SearchIconWrapper onClick={handleSubmit(onSubmit)}>
            <SearchIcon />
          </S.SearchIconWrapper>
        </S.InputWrapper>
      </S.UserTitleContainer>
      <UserItemList />
    </PageContainer>
  )
}
