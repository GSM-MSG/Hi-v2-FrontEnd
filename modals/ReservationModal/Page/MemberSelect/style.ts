import styled from '@emotion/styled'

export const MemberSelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const InputBlock = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 4.8px 14.4px;
  border: 1px solid ${({ theme }) => theme.color.Grayscale.gray05};
  border-radius: 8px;
  input {
    ${({ theme }) => theme.typography.body1.regular};
  }

  .searchIcon,
  .cancelIcon {
    cursor: pointer;
    margin-top: 0.3rem;
  }
`

export const ShowMemberListBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const ShowMemberBox = styled.div`
  ${({ theme }) => theme.typography.caption.regular};
  width: 68px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  color: ${({ theme }) => theme.color.Grayscale.gray05};
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
  margin-right: 0.5rem;
`

export const MemberListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 14rem;
  margin-bottom: 4rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const LoadingMemberListBox = styled(MemberListBox)`
  justify-content: center;
  span {
    color: ${({ theme }) => theme.color.Grayscale.gray06};
  }
`

export const MemberBox = styled.div`
  width: 100%;
  background: none;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 1.8rem 1rem;
  border-radius: 8px;

  &:hover {
    background: #f7f7f7;
  }
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8.8vw;

  img {
    border-radius: 50%;
  }

  span {
    ${({ theme }) => theme.typography.body1.medium};
    font-size: 1rem;
    color: ${({ theme }) => theme.color.Grayscale.gray08};
    margin-left: 0.2rem;
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
