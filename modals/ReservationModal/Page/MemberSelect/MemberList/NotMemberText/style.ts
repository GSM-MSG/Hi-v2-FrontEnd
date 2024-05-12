import styled from '@emotion/styled'
import { MemberListContainer } from '../style'

export const NotMemberContainer = styled(MemberListContainer)`
  justify-content: center;
  span {
    color: ${({ theme }) => theme.color.Grayscale.gray06};
  }
`
