import { SVGProps } from 'react'

export default function XMark(
  props: SVGProps<SVGSVGElement>,
  { width, height }: { width?: string; height?: string }
) {
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5 15L15 5M5 5L15 15'
        stroke='#9E9E9E'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
