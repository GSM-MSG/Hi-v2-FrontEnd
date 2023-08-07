import * as S from './style'
import NoticeItem from '../NoticeItem'

export default function NoticeItemList() {
  const test = [
    {
      noticeId: 1,
      title:
        '이번주 10/21~20/25까지는 학부모상담주간으로 인해 홈베이스 사용을 금지합니다. 금지금지 수고하세염 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
      date: '2023.12.17',
      user: '서주미',
    },
    {
      noticeId: 2,
      title:
        '이번주 10/21~20/25까지는 학부모상담주간으로 인해 홈베이스 사용을 금지합니다. 금지금지 수고하세염염염염소 소나무 무지개',
      date: '2023.12.17',
      user: '서주미',
    },
    {
      noticeId: 3,
      title:
        '이번주 10/21~20/25까지는 학부모상담주간으로 인해 홈베이스 사용을 금지합니다. 금지금지 수고하세염엄엄엄어~',
      date: '2023.12.17',
      user: '서주미',
    },
    {
      noticeId: 4,
      title:
        '이번주 10/21~20/25까지는 학부모상담주간으로 인해 홈베이스 사용을 금지합니다. 금지금지 수고하세염',
      date: '2023.12.17',
      user: '서주미',
    },
    {
      noticeId: 11,
      title:
        '이번주 10/21~20/25까지는 학부모상담주간으로 인해 홈베이스 사용을 금지합니다. 금지금지 수고하세염',
      date: '2023.12.17',
      user: '서주미',
    },
    {
      noticeId: 999,
      title:
        '이번주 10/21~20/25까지는 학부모상담주간으로 인해 홈베이스 사용을 금지합니다. 금지금지 수고하세염',
      date: '2023.12.17',
      user: '서주미',
    },
  ]
  return (
    <S.NoticeItemListContainer>
      {test.map(({ noticeId, title, date, user }, index) => (
        <NoticeItem
          key={index}
          noticeId={noticeId}
          title={title}
          date={date}
          user={user}
        />
      ))}
    </S.NoticeItemListContainer>
  )
}
