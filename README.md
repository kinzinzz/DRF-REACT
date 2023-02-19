## DRF-REACT 

- backend : Django rest framework(DRF)

- frontend : REACT@16.13.1

- DRF 사용 이유

  - RESTful API를 개발하는데 편리하다.(DB data➡ JSON): Serializer
  - OAuth2 용 패키지를 포함한 인증 정책: JWT
  - 코드가 간결해진다: Class-based Views

- 요구 사항

  | 구분   | 서비스      | 필요기능                               |
  | ------ | ----------- | -------------------------------------- |
  | 사용자 | 회원가입    | 로그인, 로그아웃                       |
  | 사용자 | 게시글 작성 | 글 작성, 수정, 삭제                    |
  | 사용자 | 게시글 보기 | 작성된 글을 볼 수 있다.                |
  | 사용자 | 게시글 검색 | 'slug'를 검색어로 입력해서 게시글 검색 |

- 기능 사항

  | 구분        | 상세 기능                                                  |
  | ----------- | ---------------------------------------------------------- |
  | 회원가입    | 이메일, 이름, 비밀번호 입력                                |
  | 게시글 보기 | 로그인한 사용자는 게시를 볼 수 있다.                       |
  | 게시글 작성 | 로그인한 사용자는 제목, 내용, 이미지를 입력                |
  | 게시글 수정 | 로그인한 사용자는 제목, 내용, 이미지를 수정                |
  | 게시글 삭제 | 로그인한 사용자는 게시글 작성자만 삭제할 수 있다.          |
  | 게시글 검색 | 로그인한 사용자는 'slug'를 검색어로 게시글 검색할 수 있다. |

- 개발 환경
  - backend
    - djangorestframework
    - djangorestframework-simplejwt : 로그인 인증
    - django-cors-headers : React 연결
    - coreschema : 프로젝트 스키마 문서
    - coreapi : 프로젝트 스키마 문서
    - coverage : 서비스 테스트
  - frontend
    - material-ui/core:  UI Framework

