# HI ( Homebase Interface )
광주소프트웨어마이스터고등학교의 홈베이스 공간을 편리하게 예약할 수 있는 서비스입니다.  

## Description
기존의 수기로 관리되던 시스템의 불편함을 개선한 서비스로 언제 어디서든 클릭 몇 번으로  
예약과 관련된 모든 작업들을 관리할 수 있습니다.
- 홈페이지  
간단한 서비스의 소개가 있습니다.

- 공지 페이지  
관리자와 선생님이 공지를 작성, 수정, 삭제할 수 있고 사용자들은 공지를 확인할 수 있습니다.

- 예약 페이지  
층과 교시 조회, 예약, 예약 수정, 예약 삭제 등의 작업들을 할 수 있습니다.

- 마이페이지  
내 정보 및 현재 내가 속해있는 테이블 정보를 확인할 수 있습니다.

- 관리자 페이지  
관리자와 선생님이 학생 명단을 확인할 수 있습니다.  
선생님은 예약 규칙을 어기거나 홈베이스 이용 수칙을 잘 지키지 않은 학생을 예약불가 상태로 변경할 수 있습니다.  
관리자는 학생의 예약 상태를 관리할 수 있고특수한 상황에 사용자의 권한을 변경시킬 수 있습니다.

## How to execution?
```
// clone
git clone https://github.com/GSM-MSG/Hi-v2-FrontEnd.git

// package install
yarn install or yarn

// run
yarn dev

// build
yarn build
```

## Contributing
- 버그 제보: [이슈 트래커](https://github.com/GSM-MSG/Hi-v2-FrontEnd/issues/new?assignees=&labels=%EB%B2%84%EA%B7%B8&projects=&template=bug.yml)에 제보할 버그를 작성합니다.
- 기능 제안: [이슈 트래커](https://github.com/GSM-MSG/Hi-v2-FrontEnd/issues/new?assignees=&labels=&projects=&template=todo.yml)에 제안하고 싶은 기능을 작성합니다.
- 코드 기여: GitHub에서 코드를 Fork하고, Pull Request를 보냅니다.

## Node Version
### Dependencies
> #### @emotion/react": "^11.11.3",
> #### @emotion/styled": "^11.11.0",
> #### @tanstack/react-query": "^5.22.2",
> #### @tanstack/react-query-devtools": "^5.24.0",
> #### axios": "^1.4.0",
> #### eslint": "8.45.0",
> #### eslint-config-next": "13.4.12",
> #### next": "13.4.12",
> #### next-seo": "^6.5.0",
> #### react": "18.2.0",
> #### react-dom": "18.2.0",
> #### react-toastify": "^9.1.3",
> #### recoil": "^0.7.7",
> #### sharp": "^0.33.3",
> #### typescript": "5.1.6"

### Dev Dependencies
> #### @types/node": "20.4.5",
> #### @types/react": "18.2.17",
> #### @types/react-dom": "18.2.7",
> #### @types/gtag.js": "^0.0.19",
> #### @types/parse-json": "^4.0.0"
