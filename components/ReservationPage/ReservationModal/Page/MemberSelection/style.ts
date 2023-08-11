import styled from '@emotion/styled'

export const MemberSelectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .searchIcon {
    position: absolute;
    top: 4.6rem;
    left: 1rem;
  }

  .closeIcon {
    position: absolute;
    top: 4.6rem;
    right: 1rem;
    cursor: pointer;
  }
`

export const Input = styled.input`
  border: 1px solid #b1b1b1;
  width: 100%;
  height: 2rem;
  padding: 1.3rem 3rem 1.3rem 3rem;
  color: #b1b1b1;
  font-size: 1rem;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: #b1b1b1;
    font-size: 0.9rem;
  }

  &:focus {
    border: 1px solid #6c6c6c;
  }
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
