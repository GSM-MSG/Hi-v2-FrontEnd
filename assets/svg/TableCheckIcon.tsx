export default function TableCheckIcon({
  checkStatus,
}: {
  checkStatus: boolean | undefined
}) {
  return (
    <svg
      width='23'
      height='23'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='24'
        height='24'
        rx='8'
        fill={checkStatus ? '#0066ff' : '#c0c0c0'}
      />
      <path
        d='M7 12.5L11 16.5L17 7.5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
