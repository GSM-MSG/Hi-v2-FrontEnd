import * as SVG from '@/assets/svg'
import { Input, PageContainer } from '../commons'
import * as S from './style'
import UserItemList from './UserItemList'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import { UserList } from '@/atoms'
import { UserItemListType } from '@/types/components'
import { useGetRole } from '@/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { get, userQueryKeys, userUrl } from '@/apis'
import { AxiosResponse } from 'axios'

export default function UserPage() {
  const form = useForm({ defaultValues: { user: '' } })
  const { register, watch, handleSubmit } = form
  const setUserList = useSetRecoilState(UserList)

  const { mutate } = useMutation({
    mutationKey: userQueryKeys.search(),
    mutationFn: (keyword: string) =>
      get<AxiosResponse<UserItemListType>>(userUrl.search(keyword)),
    onSuccess: (data) => setUserList(data.data.users),
  })

  const { isStudent } = useGetRole()
  const router = useRouter()

  useEffect(() => {
    if (isStudent) {
      router.push('/')
    }
  }, [isStudent, router])

  const onSubmit = (data: any) => mutate(data.user)

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
            <SVG.SearchIcon />
          </S.SearchIconWrapper>
        </S.InputWrapper>
      </S.UserTitleContainer>
      <UserItemList />
    </PageContainer>
  )
}
