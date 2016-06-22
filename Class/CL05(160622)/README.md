###### Front-End Develop SCHOOL

# DAY 05

![school_activity_day](note/school_activity_day.jpg)

-

### Team Activity

**[20분]** 팀 단위로 디자이너가 제작한 [PSD(Photoshop Document) 파일](https://www.dropbox.com/sh/pl3vrst3re24sht/AAD-koAIko_i493P-v9hSF1Ia?dl=0)을 선택 후, 개별 분석하여 HTML 문서 구조화(Markup) 한다.

![PSD_Lists](../Assets/PSD_Lists.png)

각 팀은 팀원 모두가 동일한 PSD를 선택하여 문서 구조화하여야 한다.<br>
만약 선택 문제로 의견이 분분한 경우, 아래 명시된 팀별 PSD를 선택한다.

- [A 팀] ETUDE-HOUSE__Main.psd
- [B 팀] Expedia__Main.psd
- [C 팀] Korail__reservation.psd / Korail__schedule.psd
- [D 팀] LETZ-GO__Main.psd
- [E 팀] Mobigen__Main.psd
- [F 팀] Natuur_Main.psd
- Reebok__Main.psd
- Starbucks-Reserve__Main.psd

-

### Code Review

**[20분]** 각 팀원은 HTML 문서 구조화 한 결과를 코드 리뷰 후, 간결하고 올바른 문서 구조화에 관해 논의한다.

- [웹표준 준수] HMTL 문법은 유효한가?
- [접근성 고려] 사용자 입장에서 접근하는데 문제가 없는가? (음성 출력/키보드 접근 등)
- [의미 구조화] HTML 구조는 올바른 의미를 가지는가?
- [코드 최적화] 불 필요한 `<div>` 또는 `<span>` 요소의 남용은 없었는가?
- [팀원간 소통] 코드는 읽기 쉽고, 간결한가?

![over-the-shoulder-code-review](note/over-the-shoulder-code-review.png)

-

### Code Refactoring

**[10분]** 논의된 결과를 토대로 팀원은 작성한 HTML 구조 문서 코드를 리팩토링 한다.

![refactoring](note/refactoring.jpg)

> ##### ※ 리팩토링(Refactoring) 이란?
> 소프트웨어 공학에서 **'결과의 변경 없이 코드의 구조를 재조정함'**을 뜻한다. 주로 가독성을 높이고 유지보수를 편하게 한다. 버그를 없애거나 새로운 기능을 추가하는 행위는 아니다. 사용자가 보는 외부 화면은 그대로 두면서 내부 논리나 구조를 바꾸고 개선하는 유지보수 행위이다.

---

### 진행 내용

- HTML 스크립트, 오브젝트
- HTML 기타
- HTML 프레임
- HTML5 표준
- CSS 란?
- CSS 선택자

-

### HTML 기타 요소

##### 인용
- 긴 인용 `<blockquote></blockquote>`
- 짧은 인용 `<q></q>` (잘 사용하지 않음)

##### 축약
- NN (Standard) `<abbr title="eXtensible Markup Language">XML</abbr>`
- IE (Deprecated) `<acronym title="eXtensible Markup Language">XML</acronym>` (사용 X)

##### 웹 정보

```html
<address>
  E Main: <a href="mailto:yamoo9@naver.com">yamoo9@naver.com</a><br>
  Phone: <a href="tel:010-1111-1111">010-1111-1111</a>
</address>
```

##### 추가/지움

```html
<p>오늘 비가 <del>내릴 것</del> <ins>오지 않을 것</ins>p>
```

##### 보존/엔티티코드/키보드

```html
<pre>
&lt;p&gt;야무 한글 로렘입숨 로렘입숨이란? 디자인을 위한 더미 텍스트!.
않고 설레게 고동소리 찬란한? 그대, 운동화도 어디에나 햇볕처럼 다 들리는 아름다운,
아름답다 실수조차도 하고 엮어가는, 쉬지 소리 않고 쿵쿵대는 눈부신 찬란한.
그대 어디에나 청춘아!, 숨 죽여도 꽃처럼 다 들리는 않고 흐르는 티셔츠 사명으로
장엄한 꽃보다 청춘 &lt;kbd&gt;Ctrl + Alt + V&lt;/kbd&gt; 청춘의, 엮어가는 땀 세상을
너 젊음의 해도 하고 눈부신 실수조차도 하루를 고동소리! 심장 청춘, 꽃보다 만들.
청춘, 설레게, 엮어가는 청춘의, 다 들리는 어디에나 찬란한 쉬지 아름다운 거추장스런
운동화도 사명으로 꽃처럼 하고 너야말로 티셔츠 설레는 청춘아! 너 젊음의 쿵쿵대는
하루를 장엄한 가슴을.&lt;/p&gt;
</pre>
```

### 기타/참고

<!-- - [pages.github.com](https://pages.github.com/) -->