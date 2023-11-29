import * as SVG from '@/assets/svg'
import { Input, PageContainer } from '../commons'
import * as S from './style'
import UserItemList from './UserItemList'
import { useForm } from 'react-hook-form'
import useFetch from '@/hooks/useFetch'
import { useSetRecoilState } from 'recoil'
import { UserList } from '@/atoms/atom'
import { UserItemType } from '@/types/components'

export default function UserPage() {
  const form = useForm({ defaultValues: { user: '' } })
  const { register, watch, handleSubmit } = form
  const setUserList = useSetRecoilState(UserList)

  const { fetch } = useFetch<UserItemType[]>({
    url: `/user/search?keyword=${watch('user')}`,
    method: 'get',
    onSuccess: (data: UserItemType[]) => {
      setUserList(data)
    },
  })

  const onSubmit = async (data: any) => {
    await fetch(data)
  }

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
