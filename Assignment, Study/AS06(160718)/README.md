###### Front-End Develop SCHOOL

# Assignment, Study 06

### 진행 내용

- HTML, CSS Style Guide

---

# HTML

### 기본규칙
* 모든 HTML 문서는 W3C validation을 통과해야 한다.
* DTD를 제외한 모든 요소와 애트리뷰트는 소문자로 작성한다
* 애트리뷰트값은 큰따옴표(" ")로 묶는다.
* 특수 기호는 문자 엔티티 참조를 사용하여 코드로 변환한다.

##### 들여쓰기
* 마크업의 중첩이 깊어질 때마다 자식 요소는 1탭 들여쓰고, 1탭의 크기는 공백 4칸으로 설정한다.

##### 빈줄
* 의미 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩만 빈 줄을 넣는다.

##### DTD
* HTML 문서를 작성할 때 HTML5를 사용한다.
	```html
	<!doctype html>
	```

##### 인코딩
* HTML 문서를 작성할 떄 기본 인코딩은 utf-8을 원칙으로 한다.
	```html
	<meta charset="utf-8">
	```

##### 주석
* HTML 주석의 시작과 종료는 아래와 같이 표기하며, 기본 형식에 맞게 작성한다.
	```html
	시작 주석 <!-- // 주석 내용 -->
	종료 주석 <!-- 주석 내용 // -->
	```

## HTML 요소 작성 규칙

#### 요소 속성 순서
* 요소의 속성선언 순서는 다음과 같다.
1. type
1. id, name
1. class
1. data-*
1. src, href, value, for
1. title, alt
1. role, aria-*

#### <html>
* 다음과 같이 lang 애트리뷰트를 선언한다.
	```html
	<html lang="ko-KR">
	```

#### <head>
* meta, title, link, script, style 순서로 요소를 선언한다.

* title : "페이지명 | 프로젝트명"의 형식으로 작성한다.
	```html
	<title>페이지명 | 프로젝트명</title>
	```

* link : rel, type href 애트리뷰트를 선언한다.
    ```html
    <link rel="stylesheet" type="text/css" href="css/style.css">
    ```
    
*  style
    ```html
    <style>
    ...
    </style>
    ```

#### <form>
*
    ```html
    <form>
        <fieldset>
            <legend>...</legend>
            ...
        </fieldset>
    </form>
    ```
* fieldset : <form> 요소의 자식 노드로 선언하여 폼 컨트롤 요소들을 그루핑하기 위해 선언한다.

* legend : 폼 컨트롤 그룹인 <fieldset>의 자식 요소로서 폼 컨트롤 요소들의 그룹 이름을 표현하기 위해 선언한다.

* input : <label> 요소, title 애트리뷰트, alt 애트리뷰트를 통해 접근성을 준수한다.
    ```html
    <label for="user_id">아이디</label>
    <input type="text" id="user_id" name="user_id">
    ```
    * type이 text인 경우 동일한 스타일의 텍스트 필드 이나 너비값이 다르면 선택적으로 style 애트리뷰트를 이용한다.


* select : 동일한 스타일의 셀렉트 박스이나 너비값이 다르면 선택적으로 style 애트리뷰트를 이용한다.

* label : <input>(text, checkbox, radio, file, password), <select>, <textarea>와 같은 폼 요소는 for 애트리뷰트를 부여하여 해당 요소의 id값과 동일한 이름으로 연결한다.
    ```html
    <label for="user_id">아이디</label>
    <input type="text" id="user_id" name="user_id">
    ```

* textarea : css를 정상적으로 불러오지 못하는 상황에서도 문제가 없도록 cols, rows의 값은 최소 30, 5 이상이 되도록 선언한다.
    ```html
    <textarea cols="30" rows="5"></textarea>
    ```

* butto : type 애트리뷰트를 button으로 선언하여 UI를 제어한다. 폼 전송 역활을 하는 버튼은 submit 타입을 사용한다.

#### <table>
* table : 표의 요약 내용을 표기해야 할 때 summary 애트리뷰트를 선택적으로 사용할 수 있다.

* caption : 표의 제목을 표현하기 위해 반드시 선언한다.

* colgroup : <col> 요소를 그루핑하여 디자인을 제어한다. 이 요소는 선택적으로 사용한다.

* col : 표 각 열의 너비를 지정을 위해 선언한다.
    * width, span 애트리뷰트를 선택적으로 선언한다.

* thead : 표 머리글을 그루핑할 때 선언한다.

* tfoot : 표 바닥글을 그루핑할 때 선택적으로 선언한다. 
    * tfoot 요소는 thead와 tbody 요소 사이에 위치해야 한다.

* th : scope, abbr, id 애트리뷰트를 선언한다.
    * 표에 셀 제목이 명시되지 않은 경우에도 <th> 요소를 선언하여 의미에 맞는 제목을 명시한다. (CSS로 숨김 처리.)
    * abbr 애트리뷰트 : 헤딩 셀의 내용을 반복해서 음성으로 출력될때 abbr 애트리뷰트에 표기된 약어를 읽는다.

* tbody : 표 본문을 그루핑하기 위해 선언한다. thead나 tfoot가 없을 경우 생략할 수 있다.

#### 기타
* a : href, target, title 애트리뷰트를 선택적으로 선언한다.
    * 새 창으로 페이지를 표시해야 할 때 target 애트리뷰트를 선택적으로 사용한다.

* img : src, width, height, title, alt, usemap 애트리뷰트를 선택적으로 선언한다.
    * 이미지 내용과 동일한 값을 alt 애트리뷰트에 표기하여, 이미지를 볼 수 없는 환경에서도 내용을 확인할 수 있게 한다.
    * title 애트리뷰트는 브라우저에 독립적으로 툴팁을 표현하기 위해 사용한다.

---

# CSS

## 기본 규칙
* 모든 CSS 문서는 W3C validation을 통과해야 한다.
* 모든 속성은 영문 소문자로만 작성한다.
* 모든 속성값은 큰따옴표(" ")로 감싼다.
* 모든 속성의 마지막은 세미콜론(;)으로 끝난다.

##### 들여쓰기
* 중괄호({})마다 1탭 들여쓰기 한다.

##### 공백
* 쉼표로 구분되는 선택자 간에는 1칸의 공백을 포함한다.
* 속성 값들은 1칸의 공백으로 구분한다.

##### 빈줄
* 의미 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩만 빈 줄을 넣는다.

##### 줄 바꿈
* 속성 간은 줄바꿈으로 구분한다.
* 속성 값이 쉼표로 구분될 때 줄 바꿈을 한다.

##### 인코딩
* 문서 첫줄에 공백없이 선언한다.
    ```css
        @charset "utf-8";
    ```

## CSS 코드 작성 규칙
#### 선택자
* 최상위 공통 선택자(*)는 사용하지 않는다.

#### 속성 선언 순서
1. 레이아웃
1. BOX
1. 배경
1. 폰트
1. 기타

#### 속성 값 축약
* border와 background는 가급적 속기형 코드를 사용한다.
* 16진수 컬러 코드값은 축약하지 않는다.
* 속성 값이 0일 경우 단위를 생략한다.

#### 한글 폰트 선언
* 한글 폰트 선언 시 한글, 영문 폰트를 모두 선언한다.
	```css
	font-family: "돋움", dotum;
	```

#### z-index
* z-index 속성 값의 범위는 최소 10, 최고 1000이며, 10 단위로 증감한다.
