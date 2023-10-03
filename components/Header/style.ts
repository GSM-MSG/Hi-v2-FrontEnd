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

  @media screen and (max-width: 850px) {
    padding: 0 14vw;
  }

  @media screen and (max-width: 670px) {
    padding: 0 10vw;
  }

  @media screen and (max-width: 450px) {
    padding: 0 8vw;
  }
`

export const MenuListBox = styled.ul<HeaderProps>`
  list-style: none;
  width: ${({ is_admin }) => (is_admin ? '20rem' : '15rem')};
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

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    width: 12rem;
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
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background: ${({ pathname, scroll }) =>
      pathname === '/' ? (scroll === 0 ? '#ffffff' : '#0066ff') : '#0066ff'};
    color: ${({ pathname, scroll }) =>
      pathname === '/' ? (scroll === 0 ? '#0066ff' : '#ffffff') : '#ffffff'};
  }

  @media screen and (max-width: 600px) {
    font-size: 0.1rem;
  }
`
