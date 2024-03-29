export const authQueryKeys = {
  login: () => ['auth', 'login'],
  logout: () => ['auth', 'logout'],
} as const

export const userQueryKeys = {
  my: () => ['user', 'my'],
  roleList: () => ['user', 'roleList'],
  studentStatus: () => ['user', 'studentStatus'],
  searchStudent: () => ['user', 'searchStudent'],
  searchUser: () => ['user', 'searchUser'],
  changeRole: () => ['user', 'changeRole'],
  myRole: () => ['user', 'myRole'],
} as const

export const homebaseQueryKeys = {
  list: () => ['homebase', 'list'],
  reserve: () => ['homebase', 'reserve'],
} as const

export const reservationQueryKeys = {
  detail: (reservationId: string | undefined) => [
    'reservation',
    'detail',
    reservationId,
  ],
  delete: (reservationId: string | undefined) => [
    'reservation',
    'delete',
    reservationId,
  ],
  modify: (reservationId: string | undefined) => [
    'reservation',
    'modify',
    reservationId,
  ],
  exit: (reservationId: string | undefined) => [
    'reservation',
    'exit',
    reservationId,
  ],
  check: (reservationId: string | undefined) => [
    'reservation',
    'check',
    reservationId,
  ],
  deleteAll: () => ['reservation', 'deleteAll'],
} as const

export const noticeQueryKeys = {
  write: () => ['notice', 'write'],
  list: () => ['notice', 'list'],
  detail: (noticeId: string) => ['notice', 'detail', noticeId],
  delete: (noticeId: string) => ['notice', 'delete', noticeId],
  modify: (noticeId: string) => ['notice', 'modify', noticeId],
}
