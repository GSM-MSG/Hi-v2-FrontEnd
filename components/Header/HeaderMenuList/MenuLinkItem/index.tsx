import { toast } from 'react-toastify'
import { HeaderMenuListProps } from '..'
import * as S from './style'

interface MenuLinkItemProps {
  menu: {
    id: number
    text: string
    link: string
  }
}

export default function MenuLinkItem({ menu, pathname, accessToken, push }: MenuLinkItemProps & Omit<HeaderMenuListProps, 'isManager'>) {
  return (
    <S.MenuLink
      isSame={pathname === menu.link}
      onClick={() =>
      accessToken
        ? push(`${menu.link}`)
        : toast.info('로그인 후에 이용해주세요')
      }
    >
      {menu.text}
    </S.MenuLink>
  )
}