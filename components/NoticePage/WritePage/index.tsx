import * as S from './style'
import { PageContainer, Button, Textarea, Input } from '@/components/commons'
import useFetch from '@/hooks/useFetch'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NoticeModifyType } from '@/types/NoticeModifyType'

export default function WritePage() {
  const router = useRouter()
  const id = router.query.id
  const [notice, setNotice] = useState<{ title: string; content: string }>({
    title: '',
    content: '',
  })
  const { title, content } = notice

  const { fetch: noticeCreate } = useFetch({
    url: '/notice',
    method: 'post',
    successMessage: '공지가 등록되었습니다.',
    errorMessage: {
      401: '토큰 값이 이상하거나 변질되었습니다.',
      403: '제어 권한이 없습니다.',
    },
  })

  const { fetch: noticeModify } = useFetch<NoticeModifyType>({
    url: `notice/${id}`,
    method: 'patch',
    successMessage: '공지가 수정되었습니다.',
    errorMessage: {
      403: '제어 권한이 없습니다.',
      404: '존재하지 않는 글입니다.',
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
      <S.WriteContainer>
        <S.WriteContentContainer>
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
        </S.WriteContentContainer>
      </S.WriteContainer>
    </PageContainer>
  )
}
