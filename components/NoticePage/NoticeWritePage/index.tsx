import { noticeQueryKeys, noticeUrl, patch, post } from '@/apis'
import { Button, Input, PageContainer, Textarea } from '@/components'
import { NoticeItemType, NoticeType } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './style'

export default function NoticeWritePage() {
  const router = useRouter()
  const id = String(router.query.id)
  const [notice, setNotice] = useState<NoticeType>({
    title: '',
    content: '',
  })
  const { title, content } = notice
  const [debouncedClick, setDebouncedClick] = useState(false)

  const { refetch } = useQuery<AxiosResponse<NoticeItemType[]>, AxiosError>({
    queryKey: noticeQueryKeys.list(),
  })
  const { mutate: noticeCreate } = useMutation<void, AxiosError, NoticeType>({
    mutationKey: noticeQueryKeys.write(),
    mutationFn: (createValue) => post(noticeUrl.notice(), createValue),
    onSuccess: () => {
      router.push('/notice', undefined, { shallow: true })
      toast.success('공지사항을 추가했습니다')
      refetch()
    },
    onError: (error) => {
      if (error.response) {
        const status = error.response.status
        if (status === 401) {
          toast.error('토큰 값이 이상하거나 변질되었습니다')
        }
        if (status === 403) {
          toast.error('제어 권한이 없습니다')
        }
      }
    },
  })

  const { mutate: noticeModify } = useMutation<void, AxiosError, NoticeType>({
    mutationKey: noticeQueryKeys.detail(id),
    mutationFn: (modifyValue) => patch(noticeUrl.requestId(id), modifyValue),
    onSuccess: () => {
      router.push('/notice', undefined, { shallow: true })
      toast.success('공지사항을 수정했습니다')
      refetch()
    },
    onError: (error) => {
      if (error.response) {
        const status = error.response.status
        if (status === 403) {
          toast.error('제어 권한이 없습니다.')
        }
        if (status === 404) {
          toast.error('존재하지 않는 글입니다.')
        }
      }
    },
  })
  useEffect(() => {
    const initialTitle = router.query.title as string
    const initialContent = router.query.content as string
    if (id) {
      setNotice({
        title: initialTitle || '',
        content: initialContent || '',
      })
    }
  }, [id, router])

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNotice((prevNotice) => ({
      ...prevNotice,
      [name]: value,
    }))
  }

  const onClick = () => {
    if (!debouncedClick) {
      setDebouncedClick(true)
      setTimeout(() => {
        setDebouncedClick(false)
      }, 1000)

      if (title.trim() === '' || content.trim() === '') {
        toast.warning('제목이나 내용을 입력해주세요')
      } else {
        if (id !== 'undefined') {
          noticeModify(notice)
        } else {
          noticeCreate(notice)
        }
      }
    }
  }

  return (
    <PageContainer
      display='flex'
      alignItems='center'
      justifyContent='center'
      background='#f5f5f5'
    >
      <S.NoticeWriteContainer>
        <S.NoticeWriteContentContainer>
          <S.InputContainer>
            <S.WriteInputTitle>
              <p>제목</p>
              <p>(20자 이하)</p>
              <p>*</p>
            </S.WriteInputTitle>
            <Input
              width='100%'
              height='5vh'
              fontSize='14px'
              placeholder='제목을 입력해주세요.'
              border='1px solid #C0C0C0'
              borderRadius='8px'
              value={title}
              onChange={(e) => onChange(e)}
              name='title'
              focus={true}
              maxLength={20}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.WriteInputTitle>
              <p>내용</p>
              <p>(200자 이하)</p>
              <p>*</p>
            </S.WriteInputTitle>
            <Textarea
              height='35vh'
              placeholder='내용을 작성해주세요.'
              fontSize='14px'
              value={content}
              onChange={onChange}
              name='content'
              maxLength={200}
            />
          </S.InputContainer>
          <Button
            width='100%'
            height='6vh'
            background='#0066FF'
            color='#ffffff'
            border='none'
            borderRadius='8px'
            fontSize='18px'
            lineHeight='21.48px'
            fontWeight='700'
            onClick={onClick}
          >
            작성완료
          </Button>
        </S.NoticeWriteContentContainer>
      </S.NoticeWriteContainer>
    </PageContainer>
  )
}
