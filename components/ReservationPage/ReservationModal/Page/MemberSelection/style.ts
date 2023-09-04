import styled from '@emotion/styled'

export const MemberSelectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.9rem;
  border: 1px solid #b1b1b1;
  border-radius: 8px;

  .searchIcon,
  .cancelIcon {
    cursor: pointer;
    margin-top: 0.3rem;
  }

  &:focus {
    border: 1px solid red;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  color: #b1b1b1;
  font-size: 1rem;
  border: none;
  outline: none;

  &::placeholder {
    color: #b1b1b1;
    font-size: 0.8rem;
  }
`

export const ShowMemberListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.5rem;
  margin-left: 0.8rem;
`

export const ShowMemberBox = styled.div`
  width: 4rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 400;
  background: #f5f5f5;
  color: #b1b1b1;
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
  margin-top: 0.5rem;
  margin-bottom: 4rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const LoadingMemberListBox = styled(MemberListBox)`
  justify-content: center;
  span {
    color: #9e9e9e;
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

  span {
    font-size: 1rem;
    font-weight: 500;
    color: #606060;
    margin-left: 0.2rem;
  }
`
