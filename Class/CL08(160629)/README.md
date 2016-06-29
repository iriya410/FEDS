###### Front-End Develop SCHOOL

# DAY 08

### Team Activity
* header 안에 section 

 section은 section을 감싸도 되지만 header가 section을 감싸는 것은 구조상 의미가 이상함.

### Box Model
- margin: 외부여백 영역, 투명하며 배경색이 적용되지 않음, 음수 적용 가능
- border: 테두리 영역
- padding: 내부여백 영역

### Margin Collopse
- 마진이 상하 방향으로 겹치는 현상으로 위, 아래 요소의 margin중 큰 수치가 적용 된다.
- 좌우로는 겹쳐지지 않는다

### em, rem
- em: 폰트 사이즈의 상속으로 기준 폰트 사이즈가 매번 달라짐
- rem: root인 html의 폰트 사이즈가 기준 폰트 사이즈로 설정됨

### 미디어 쿼리를 사용한 적응형 화면 디자인
- @media 환경 and (조건1) and (조건2) { }
- @media only screen and (min-width: ) and (max-width: ) { }
