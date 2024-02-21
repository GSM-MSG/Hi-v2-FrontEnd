export const authQueryKeys = {
  login: () => ['auth', 'login'],
  logout: () => ['auth', 'login'],
} as const

export const userQueryKeys = {
  my: () => ['user', 'my'],
  list: () => ['user', 'list'],
  roleList: () => ['user', 'roleList'],
  studentStatus: () => ['user', 'studentStatus'],
  search: () => ['user', 'search'],
  changeRole: () => ['user', 'changeRole'],
  myRole: () => ['user', 'myRole'],
} as const

export const homebaseQueryKeys = {
  list: () => ['homebase', 'list'],
  reserve: () => ['homebase', 'reserve'],
} as const

export const reservationQueryKeys = {
  detail: (reservationId: string) => ['reservation', 'detail', reservationId],
  delete: (reservationId: string) => ['reservation', 'delete', reservationId],
  modify: (reservationId: string) => ['reservation', 'modify', reservationId],
  delegate: (reservationId: string) => [
    'reservation',
    'delegate',
    reservationId,
  ],
  exit: (reservationId: string) => ['reservation', 'exit', reservationId],
  check: (reservationId: string) => ['reservation', 'check', reservationId],
  deleteAll: () => ['reservation', 'deleteAll'],
} as const

export const noticeQueryKeys = {
  write: () => ['notice', 'write'],
  list: () => ['notice', 'list'],
  detail: (noticeId: string) => ['notice', 'detail', noticeId],
  delete: (noticeId: string) => ['notice', 'delete', noticeId],
  modify: (noticeId: string) => ['notice', 'modify', noticeId],
}
