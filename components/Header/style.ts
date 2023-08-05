import styled from '@emotion/styled'

interface HeaderProps {
  scroll: number
}

export const HeaderContainer = styled.header<HeaderProps>`
  position: sticky;
  top: 0;
  width: 100%;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  background: ${({ scroll }) =>
    scroll === 0 ? 'linear-gradient(to right, #0026ff, #00F0FF)' : '#ffffff'};

  & > svg {
    width: 2rem;
    height: 2rem;
  }
`

export const MenuListBox = styled.ul<HeaderProps>`
  list-style: none;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  padding: 0;

  a {
    text-decoration: none;
    color: ${({ scroll }) => (scroll === 0 ? '#ffffff' : '#191919')};
    font-weight: 400;
  }

  .choice {
    color: ${({ scroll }) => (scroll === 0 ? '#ffffff' : '#000000')};
    font-weight: 600;
  }
`

export const LoginBtn = styled.button<HeaderProps>`
  border: ${({ scroll }) => (scroll === 0 ? '1px solid #ffffff' : 'none')};
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  background: ${({ scroll }) => (scroll === 0 ? 'none' : '#0066ff')};
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: ${({ scroll }) => (scroll === 0 ? '#ffffff' : '#0066ff')};
    color: ${({ scroll }) => (scroll === 0 ? '#0066ff' : '#ffffff')};
  }
`
