import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ffffff;
`

export const MenuListBox = styled.ul`
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
    color: #191919;
    font-weight: 400;
  }

  .choice {
    color: #000000;
    font-weight: 600;
  }
`

export const LoginBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 7px 10px;
  cursor: pointer;
  background-color: #0066ff;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
`
