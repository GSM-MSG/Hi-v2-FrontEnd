import { PortalPropsType } from '@/types'
import { MouseEvent, cloneElement, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import * as S from './style'

function Portal({ children, onClose }: PortalPropsType) {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (typeof window === 'undefined' || !isMounted) return <></>

  const el = document.getElementById('modal')
  if (!el) throw new Error('Not Found Modal')

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return ReactDOM.createPortal(
    <S.ModalWrapper onClick={onClose}>
      {cloneElement(children, { onClick })}
    </S.ModalWrapper>,
    el
  )
}

export default Portal
