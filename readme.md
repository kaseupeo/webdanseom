# 웹딴섬
간호사 당직 근무 웹사이트   
</br></br></br></br></br>
_요구사항 명세표_
<table>
  <tr>
    <th>순번</th>
    <th>구분</th>
    <th>서비스(메뉴)</th>
    <th>요구기능</th>
    <th>기능 상세설명</th>
  </tr>
  <tr>
    <td>1</td>
    <td rowspan="3">공통</td>
    <td rowspan="3">회원메뉴</td>
    <td>로그인</td>
    <td>
      <ul>
        <li>사용자가 이메일과 패스워드를 입력 시 로그인</li>
        <li>수간호사, 일반 간호사를 나눠서 로그인 처리</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>회원가입</td>
    <td>
      <ul>
        <li>카카오, 네이버 api를 이용한 회원가입 처리</li>
        <li>각 병원 별 그룹 만들기</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>3</td>
    <td>id/pw 찾기</td>
    <td>
      <ul>
        <li>이메일을 통한 아이디 찾기, 비밀번호 변경</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>4</td>
    <td rowspan="9">수간호사</td>
    <td rowspan="2">간호사 관리</td>
    <td>간호사 등록</td>
    <td>
      <ul>
        <li>간호사 정보를 등록</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>5</td>
    <td>간호사 그룹 생성</td>
    <td>
      <ul>
        <li>부서 및 간호사별, 특이사항, 그룹 등 설정</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>6</td>
    <td rowspan="7">근무표 관리 메뉴</td>
    <td>근무표 생성, 수정</td>
    <td>
      <ul>
        <li>전월 근무표, 간호사별 숙련도, 특이사항을 고려하여 근무표를 자동 생성</li>
        <li>근무표를 작성할 수 있도록 구현</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>7</td>
    <td>근무표 입출력</td>
    <td>
      <ul>
        <li>근무표를 xls, csv 파일로 출력할 수 있도록 구현</li>
        <li>xls, csv 파일을 입력하면 웹에 근무표를 입력할 수 있도록 구현</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>8</td>
    <td>근무표 조회</td>
    <td>
      <ul>
        <li>년, 월별로 이전 전체 근무표 조회</li>
        <li>메인 화면에서 조회</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>9</td>
    <td>근무 통계 조회</td>
    <td>
      <ul>
        <li>Day, Evening, Night, Off 등으로 월별 및 전체 통계 조회</li>
        <li>해당 일 근무 간호사 리스트 통계</li>
        <li>휴가, 병가, 연차 등 통계</li>
        <li>간호사가 해당병원에서 근무한 연차와 전체 경력 통계</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>10</td>
    <td>근무표 배포</td>
    <td>
      <ul>
        <li>일반 간호사들에게 근무표를 배포할 수 있음</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>11</td>
    <td>전월 근무표 등록/수정</td>
    <td>
      <ul>
        <li>다음 근무에 대한 공정성 반영을 위해 등록</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>12</td>
    <td>온콜(On-Call)표</td>
    <td>
      <ul>
        <li>평일 야간, 주말, 공휴일 온콜 리스트</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>13</td>
    <td rowspan="4">일반 간호사</td>
    <td rowspan="2">근무표 조회</td>
    <td>근무표 조회</td>
    <td>
      <ul>
        <li>월별로 근무표를 조회</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>14</td>
    <td>근무 통계 조회</td>
    <td>
      <ul>
        <li>Day, evening, Night, Off 일수 들의 근무표의 통계 지표를 제시하는 메뉴</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>15</td>
    <td rowspan="2">근무 조정 요청</td>
    <td>Off 신청</td>
    <td>
      <ul>
        <li>지정 휴무일 신청 및 병가, 반차 요청 등 요청사항 신청</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>16</td>
    <td>탄력근무제</td>
    <td>
      <ul>
        <li>전체 근무일이 부족하거나 더 들어가고 싶을 때 요청</li>
        <li>지정 근무일이 필요할 경우 요청</li>
      </ul>
    </td>
  </tr>
</table>
