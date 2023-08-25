import * as S from './style'
import PageContainer from '@/components/common/PageContainer'
import Input from '@/components/common/Input'
import Textarea from '@/components/common/Textarea'
import Button from '@/components/common/Button'
import useFetch from '@/hooks/useFetch'
import { useState } from 'react'

export default function WritePage() {
  const { fetch } = useFetch({ url: '/notice', method: 'post' })
  const [notice, setNotice] = useState({ title: '', content: '' })
  const { title, content } = notice

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
    fetch(notice)
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
