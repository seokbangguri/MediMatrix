# Medimatrix 프로젝트

Medimatrix는 의료 기관 및 선생님들을 위한 플랫폼입니다. 환자 관리, 예약 관리, 데이터 분석 등의 기능을 제공하여 의료 서비스를 효율적으로 관리할 수 있습니다.

## 주요 기술 스택

- Node.js
- Express.js
- MySQL
- React.js
- 등

## 설치 및 실행 방법

1. **의존성 설치**

   ```
   npm install
   ```

2. **환경 변수 설정**

   `.env` 파일을 생성하고 아래와 같이 환경 변수를 설정합니다.

   ```plaintext
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_DATABASE=your_database_name
   ```

3. **데이터베이스 마이그레이션**

   데이터베이스 마이그레이션을 실행하여 테이블을 생성합니다.

   ```
   npm run migrate
   ```

4. **클라이언트 실행**

   ```
   npm start
   ```

5. **서버 실행**

   클라이언트 디렉토리로 이동하여 클라이언트를 실행합니다.

   ```
   cd api
   npm install
   node api.js
   ```

6. **브라우저에서 확인**

   [http://localhost:3000](http://localhost:3000) 에 접속하여 프로젝트를 확인합니다.

## 기능 목록

- 회원가입 및 로그인 기능
- 의료 기관 및 선생님 정보 등록 및 수정
- 환자 예약 및 관리