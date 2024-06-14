import { headerMenuList } from '@/constants'
import { UrlObject } from 'url'
import MenuLinkItem from './MenuLinkItem'
import * as S from './style'

export interface HeaderMenuListProps {
  isManager: boolean
  pathname: string
  accessToken: string | null
  push: (url: UrlObject | string) => Promise<boolean>
}

function HeaderMenuList({
  isManager,
  pathname,
  accessToken,
  push,
}: HeaderMenuListProps) {
  return (
    <S.MenuListContainer isManager={isManager}>
      {headerMenuList[isManager ? 1 : 0].map((menu) => (
        <MenuLinkItem
          key={menu.id}
          menu={menu}
          pathname={pathname}
          accessToken={accessToken}
          push={push}
        />
      ))}
    </S.MenuListContainer>
  )
}

export default HeaderMenuList
