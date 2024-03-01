import { Button, Input, PageContainer, Textarea } from '@/components'
import { NoticeModifyType } from '@/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './style'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { noticeQueryKeys, noticeUrl, patch, post } from '@/apis'
import { toast } from 'react-toastify'

interface noticeType {
  title: string
  content: string
}

export default function NoticeWritePage() {
  const router = useRouter()
  const id = String(router.query.id)
  const [notice, setNotice] = useState<noticeType>({
    title: '',
    content: '',
  })
  const { title, content } = notice

  const { mutate: noticeCreate } = useMutation<void, AxiosError, noticeType>({
    mutationKey: noticeQueryKeys.write(),
    mutationFn: (data) => post(noticeUrl.notice(), data),
    onError: (error) => {
      if (error.response) {
        const status = error.response.status
        if (status === 401) {
          toast.error('토큰 값이 이상하거나 변질되었습니다.')
        }
        if (status === 403) {
          toast.error('제어 권한이 없습니다.')
        }
      }
    },
  })

  const { mutate: noticeModify } = useMutation<void, AxiosError, noticeType>({
    mutationKey: noticeQueryKeys.detail(id),
    mutationFn: (data) => patch(noticeUrl.requestId(id), data),
    onSuccess: () => toast.success('공지가 수정되었습니다.'),
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
    const id = router.query.id
    const initialTitle = router.query.title as string
    const initialContent = router.query.content as string
    if (id) {
      setNotice({
        title: initialTitle || '',
        content: initialContent || '',
      })
    }
  }, [router])

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNotice((prevNotice) => ({
      ...prevNotice,
      [name]: value,
    }))
  }

  const onClick = async () => {
    if (id) {
      await noticeModify(notice)
    } else {
      await noticeCreate(notice)
    }
    router.push('/notice', undefined, { shallow: true })
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
              placeholder='제목을 입력해주세요.'
              border='1px solid #C0C0C0'
              borderRadius='8px'
              onChange={(e) => onChange(e)}
              value={title}
              name='title'
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
              borderColor='#c0c0c0'
              placeholder='내용을 작성해주세요.'
              fontSize='0.8rem'
              onChange={(e) => onChange(e)}
              value={content}
              name='content'
            />
          </S.InputContainer>
          <Button
            width='100%'
            height='6vh'
            background='#0066FF'
            color='#fff'
            border='none'
            borderRadius='8px'
            fontWeight='600'
            onClick={onClick}
          >
            작성완료
          </Button>
        </S.NoticeWriteContentContainer>
      </S.NoticeWriteContainer>
    </PageContainer>
  )
}
