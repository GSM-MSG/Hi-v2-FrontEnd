import ReactDOM from 'react-dom'
import { PortalProps } from '@/types/components/Portal'
import { cloneElement, useState, MouseEvent, useEffect } from 'react'
import * as S from './style'

function Portal({ children, onClose }: PortalProps) {
  const [isCSR, setIsCSR] = useState<boolean>(false)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  if (typeof window === 'undefined') return <></>
  if (!isCSR) return <></>

  const el = document.getElementById('modal')
  if (!el) throw new Error('Not Found Modal')

  // 이벤트 버블링 방지
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
