###### Front-End Develop SCHOOL

# Assignment, Study 05

### 진행 내용

-  CSS Selector

-

### CSS Selector

| 패턴 | 의미 | 유형 |
|----------------------|-----------------------------------------------------------------------------|-------------------------|
| * | 모든 요소 | 전역 셀렉터 |
| E | E 타입 요소 | 타입 셀렉터 |
| [attr] | attr 속성을 가지는 요소 | 속성 셀렉터 |
| [attr="value"] | attr 속성의 값이 value인 요소 | 속성 셀렉터 |
| [attr~="value"] | attr 속성의 값을 공백으로 구분했을때 하나 이상의 값이 value와 일치하는 요소 | 속성 셀렉터 |
| [attr^="value"] | attr 속성의 값이 value로 시작하는 요소 | 속성 셀렉터 |
| [attr$="value"] | attr 속성의 값이 value로 끝나는 요소 | 속성 셀레거 |
| [attr*="value"] | attr 속성의 값이 value를 포함하는 요소 | 속성 셀렉터 |
| [attr|="value"] | attr 속성의 값을 하이픈으로 구분했을때(왼쪽 기준) value로 시작하는 요소 | 속성 셀렉터 |
| :root | 문서의 루트인 요소 | 구조 가상 클래스 |
| :nth-child(n) | 부모에서 n번째 자식인 요소 | 구조 가상 클래스 |
| :nth-last-child(n) | 부모에서 뒤에서부터 n번째 자식인 요소 | 구조 가상 클래스 |
| :nth-of-type(n) | 해당 타입의 n번째 요소 | 구조 가상 클래스 |
| :nth-last-of-type(n) | 해당 타입의 뒤에서부터 n번째 요소 | 구조 가상 클래스 |
| :first-child | 부모에서 첫번째 자식인 요소 | 구조 가상 클래스 |
| :last-child | 부모에서 마지막 자식인 요소 | 구조 가상 클래스 |
| :first-of-type | 해당 타입의 첫번째 요소 | 구조 가상 클래스 |
| :last-of-type | 해당 타입의 마지막 요소 | 구조 가상 클래스 |
| :only-child | 부모에서 유일한 자식인 요소 | 구조 가상 클래스 |
| :only-of-type | 해당 타입의 유일한 요소 | 구조 가상 클래스 |
| :empty | 자식을 갖지 않는 요소 | 구조 가상 클래스 |
| :link | 방문하지 않는 요소 | 링크 가상 클래스 |
| :visited | 방문한 요소 | 링크 가상 클래스 |
| :active | Mouse Down 상태 | 사용자 행동 가상 클래스 |
| :hover | Mouse On 상태 | 사용자 행동 가상 클래스 |
| :focus | Keyboard Focus 상태 | 사용자 행동 가상 클래스 |
| :target | URI를 참조하는 요소 | 타겟 가상 클래스 |
| :lang(language) | 언어가 langauage인 요소 | 언어 가상 클래스 |
| :enabled | 사용이 가능한 요소 | 상태 가상 클래스 |
| :disabled | 사용이 불가능한 요소 | 상태 가상 클래스 |
| :checked | 체크 되어있는 요소 | 상태 가상 클래스 |
| ::first-line | 요소의 첫번째 줄 | 가상 요소 |
| ::first-letter | 요소의 첫번째 문자 | 가상 요소 |
| ::before | 요소 앞에 콘텐츠 생성 | 가상 요소 |
| ::after | 요소 뒤에 콘텐츠 생성 | 가상 요소 |
| .class | class 클래스를 가진 요소 | 클래스 셀렉터 |
| #id | id 아이디를 가진 요소 | ID 셀렉터 |
| :not(sel) | sel이 아닌 요소 | 부정 가상 클래스 |
| E F | E 요소의 자손인 F 요소 | 자손 콤비네이터 |
| E > F | E 요소의 자식인 F 요소 | 자식 콤비네이터 |
| E + F | E 요소의 바로 다음 형제인 F 요소 | 인접 형제 콤비네이터 |
| E ~ F | E 요소의 다음 형제들인 F요소 | 일반 형제 콤비네이터 |