import * as S from './style'
import * as SVG from '../../../assets/svg'
import PageContainer from '@/components/common/PageContainer'
import Input from '@/components/common/Input'
import Textarea from '@/components/common/Textarea'
import Button from '@/components/common/Button'

export default function WritePage() {
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
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.WriteInputTitle>
              <p>내용</p>
              <p>(200자 이하)</p>
              <p>*</p>
            </S.WriteInputTitle>
            <Textarea
              height='20vh'
              borderColor='#c0c0c0'
              placeholder='내용을 작성해주세요.'
              fontSize='0.8rem'
            />
          </S.InputContainer>
          <S.AddImgContainer>
            <S.WriteInputTitle>
              <p>첨부파일</p>
            </S.WriteInputTitle>
            <S.AddImg>
              <SVG.AddImgIcon />
            </S.AddImg>
            <S.ImgDesc>
              이미지 파일(PNG, JPG, GIF)를 기준으로 최대 10MB이하,
              <br />
              최대 3개까지 등록 가능합니다.
            </S.ImgDesc>
          </S.AddImgContainer>
          <Button
            width='100%'
            height='6vh'
            background='#0066FF'
            color='#fff'
            border='none'
            borderRadius='8px'
            fontWeight='600'
          >
            작성완료
          </Button>
        </S.WriteContentContainer>
      </S.WriteContainer>
    </PageContainer>
  )
}
