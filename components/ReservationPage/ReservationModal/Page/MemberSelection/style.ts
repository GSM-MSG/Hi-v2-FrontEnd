import styled from '@emotion/styled'

export const MemberSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .searchIcon {
    position: absolute;
    top: 6.6rem;
    left: 3rem;
  }

  .closeIcon {
    position: absolute;
    top: 6.6rem;
    right: 3rem;
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
  margin-top: 0.5rem;
  margin-bottom: 2.4rem;
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

  span {
    font-size: 1rem;
    font-weight: 500;
    color: #606060;
  }

  &:hover {
    background: #e9e9e9;
  }
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 9vw;
`

export const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 2px solid #0066ff;
  border-radius: 8px;
  color: #0066ff;
  width: 3.7rem;
  height: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: #0066ff;
  }
`
