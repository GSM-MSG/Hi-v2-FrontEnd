import { PageContainerType } from '@/types/components/PageContainerType'
import * as S from './style'

export default function PageContainer(props: PageContainerType) {
  return (
    <S.PageContainer
      display={props.display}
      alignItems={props.alignItems}
      justifyContent={props.justifyContent}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
    >
      {props.children}
    </S.PageContainer>
  )
}
