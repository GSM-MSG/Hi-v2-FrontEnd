import { PageContainerPropsType } from '@/types/components'
import * as S from './style'

function PageContainer(props: PageContainerPropsType) {
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

export default PageContainer
