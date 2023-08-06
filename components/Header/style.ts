import styled from '@emotion/styled'

interface HeaderProps {
  scroll: number
  pathname: string
}

export const HeaderContainer = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15vw;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  background: ${({ scroll, pathname }) =>
    pathname === '/'
      ? scroll === 0
        ? 'linear-gradient(to right, #0026ff, #00F0FF)'
        : '#ffffff'
      : '#ffffff'};

  svg {
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
    color: ${({ scroll, pathname }) =>
      pathname === '/' ? (scroll === 0 ? '#ffffff' : '#191919') : '#191919'};
    font-weight: 400;
  }

  .choice {
    color: ${({ scroll }) => (scroll === 0 ? '#ffffff' : '#000000')};
    font-weight: 600;
  }
`

export const LoginBtn = styled.button<HeaderProps>`
  border: ${({ pathname, scroll }) =>
    pathname === '/' ? (scroll === 0 ? '1px solid #ffffff' : 'none') : 'none'};
  border-radius: 8px;
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  background: ${({ pathname, scroll }) =>
    pathname === '/' ? (scroll === 0 ? 'none' : '#0066ff') : '#0066ff'};
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
<<<<<<< Updated upstream
=======

  &:hover {
    background: ${({ pathname, scroll }) =>
      pathname === '/' ? (scroll === 0 ? '#ffffff' : '#0066ff') : '#0066ff'};
    color: ${({ pathname, scroll }) =>
      pathname === '/' ? (scroll === 0 ? '#0066ff' : '#ffffff') : '#ffffff'};
  }
>>>>>>> Stashed changes
`
