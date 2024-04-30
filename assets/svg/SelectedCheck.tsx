export default function SelectedCheck({ stroke }: { stroke?: string }) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='10'
        cy='10'
        r='9'
        fill='white'
        stroke={stroke}
        strokeWidth='2'
      />
      <path
        d='M6.875 10.3125L9.375 12.8125L13.125 7.1875'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
