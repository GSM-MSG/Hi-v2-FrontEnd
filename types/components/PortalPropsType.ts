import { ReactElement } from 'react'

export interface PortalPropsType {
  children: ReactElement
  onClose?: () => void
}
