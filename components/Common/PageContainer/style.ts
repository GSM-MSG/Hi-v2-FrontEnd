import { PageContainerType } from '@/types/components/PageContainerType'
import styled from '@emotion/styled'

export const PageContainer = styled.div<PageContainerType>`
  width: 100vw;
  min-height: calc(100vh - 7.8rem);
  height: 100%;
  background-color: #f5f5f5;
  padding: 0 15vw;
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
`
