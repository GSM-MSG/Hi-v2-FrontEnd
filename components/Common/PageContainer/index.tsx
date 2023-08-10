import { PageContainerPropsType } from '@/types/components/PageContainerPropsType'
import * as S from './style'

export default function PageContainer(props: PageContainerPropsType) {
  return (
    <S.PageContainer
      display={props.display}
      alignItems={props.alignItems}
      justifyContent={props.justifyContent}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      background={props.background}
    >
      {props.children}
    </S.PageContainer>
  )
}
