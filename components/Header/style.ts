import { HeaderProps } from '@/types/style/Header'
import styled from '@emotion/styled'

export const HeaderContainer = styled.header<HeaderProps>`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 3.8rem;
  padding: 0 18vw;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  background: ${({ scroll, pathname }) =>
    pathname === '/'
      ? scroll === 0
        ? 'linear-gradient(90deg, #0026ff 0%, #00d1ff 100%)'
        : '#ffffff'
      : '#ffffff'};

  & > svg {
    width: 2rem;
    height: 2rem;
  }
`

export const MenuListBox = styled.ul<HeaderProps>`
  list-style: none;
  width: ${({ role }) => (role === 'ROLE_STUDENT' ? '10rem' : '15rem')};
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
    color: ${({ scroll, pathname }) =>
      pathname === '/' ? (scroll === 0 ? '#ffffff' : '#000000') : '#000000'};
    font-weight: 600;
  }
`

export const LoginBtn = styled.button<HeaderProps>`
  border: ${({ pathname, scroll }) =>
    pathname === '/' ? (scroll === 0 ? '1px solid #ffffff' : 'none') : 'none'};
  border-radius: 8px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  background: ${({ pathname, scroll }) =>
    pathname === '/' ? (scroll === 0 ? 'none' : '#0066ff') : '#0066ff'};
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: ${({ pathname, scroll }) =>
      pathname === '/' ? (scroll === 0 ? '#ffffff' : '#0066ff') : '#0066ff'};
    color: ${({ pathname, scroll }) =>
      pathname === '/' ? (scroll === 0 ? '#0066ff' : '#ffffff') : '#ffffff'};
  }
`
