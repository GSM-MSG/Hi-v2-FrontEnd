import { PageContainerPropsType } from '@/types/components'
import styled from '@emotion/styled'

export const PageContainer = styled.div<PageContainerPropsType>`
  width: 100vw;
  min-height: calc(100vh - 7.8rem);
  height: 100%;
  padding: 0 18vw;
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  background-color: ${(props) => props.background};

  @media screen and (max-width: 850px) {
    padding: 0 14vw;
    padding-top: ${(props) => props.paddingTop};
    padding-bottom: ${(props) => props.paddingBottom};
  }

  @media screen and (max-width: 670px) {
    padding: 0 10vw;
    padding-top: ${(props) => props.paddingTop};
    padding-bottom: ${(props) => props.paddingBottom};
  }

  @media screen and (max-width: 450px) {
    padding: 0 8vw;
    padding-top: ${(props) => props.paddingTop};
    padding-bottom: ${(props) => props.paddingBottom};
  }
`
