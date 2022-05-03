# 웹딴섬
간호사 당직 근무 웹사이트   
</br></br></br></br></br>
_세부기능_
<table>
  <tr>
    <th>메뉴</th>
    <th>요청 기능</th>
    <th>세부기능</th>
    <th>세부 내용</th>
  </tr>
  <tr>
    <td rowspan="8">회원메뉴</td>
    <td>로그인</td>
    <td>로그인</td>
    <td rowspan="2">
      <ul>
        <li>REST API를 통해 회원가입과 로그인을 간편하게 할 수 있다.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>회원가입</td>
    <td>회원가입</td>
  </tr>
  <tr>
    <td>비밀번호 찾기</td>
    <td>비밀번호 찾기</td>
    <td>
      <ul>
        <li>DB에 저장된 회원 이름과 이메일을 입력받고 비밀번호를 이메일로 난수 비밀번호를 보내준다.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td rowspan="5">회원정보 수정</td>
    <td>회원정보 변경</td>
    <td>
      <ul>
        <li>이름, 전화번호 변경 가능</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>비밀번호 변경</td>
    <td>
      <ul>
        <li>비밀번호 변경 기능</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>회원탈퇴</td>
    <td>
      <ul>
        <li>DB 데이터를 delect로 회원 정보 삭제</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>그룹 생성</td>
    <td>
      <ul>
        <li>어떤 병원의 과별(응급과, 수술과) 그룹 생성</li>
        <li>어떠한 그룹에도 속해 있지 않은 회원은 그룹을 생성할 수 있고 생성과 동시에 직책은 수간호사로 정해진다.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>그룹 참여</td>
    <td>
      <ul>
        <li>이미 생성된 그룹의 참여는 해당 그룹의 수간호사(그룹장)의 초대링크 공유를 통해 해당 그룹에 참여할 수 있다.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td rowspan="9">수간호사 메뉴</td>
    <td rowspan="2">간호사 등록</td>
    <td>간호사 추가/수정</td>
    <td>
      <ul>
        <li>간호사를 추가하게 되면 DB 간호사 테이블의 튜플이 하나 생성되며 튜플에는 이름, 전담, 직책(수간호사, 책임간호사, 주임간호사, 평간호사, 신입 간호사), 연차가 저장된다.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>프리셉터 관계 생성</td>
    <td>
      <ul>
        <li>추가된 간호사들을 선택하여 선임간호사 - 신입 간호사를 매칭해 프리셉터 관계를 등록할 수 있다.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td rowspan="5">근무표 관리</td>
    <td>근무표 자동생성</td>
    <td>
      <ul>
        <li>자동 생성에 고려할 내용으로 직책, 해당 일 최소 듀티별 인원, 전날 듀티, 월 N 근무 평균을 고려하여 자동 생성</li>
        <li>듀티별 하루 최소인원은 D은 2명, E는 2명, N은 2명을 표준으로 정하여 고려한다.(최소인원은 사용자가 변경 가능함)</li>
        <li>전전날까지 고려하여 우선순위를 정하고 우선수위가 높은 간호사부터 배정(이전 근무가 NODm EOD일 경우 우선순위를 낮춤)</li>
        <li>선임 간호사와 신입 간호사의 프리셉터 관계를 </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>근무표 입출력</td>
    <td>
      <ul>
        <li>근무표를 xls, csv 파일로 출력할 수 있도록 구현</li>
        <li>xls, csv 파일을 입력하면 웹에 근무표를 입력할 수 있도록 구현</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>근무표 조회</td>
    <td>
      <ul>
        <li>년, 월별로 이전 전체 근무표 조회</li>
        <li>메인 화면에서 조회</li>
      </ul>
    </td>
  </tr>
  <tr>
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
    <td>근무표 배포</td>
    <td>
      <ul>
        <li>일반 간호사들에게 근무표를 배포할 수 있음</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>전월 근무표 등록/수정</td>
    <td>
      <ul>
        <li>다음 근무에 대한 공정성 반영을 위해 등록</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>온콜(On-Call)표</td>
    <td>
      <ul>
        <li>평일 야간, 주말, 공휴일 온콜 리스트</li>
      </ul>
    </td>
  </tr>
  <tr>
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
    <td>근무 통계 조회</td>
    <td>
      <ul>
        <li>Day, evening, Night, Off 일수 들의 근무표의 통계 지표를 제시하는 메뉴</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td rowspan="2">근무 조정 요청</td>
    <td>Off 신청</td>
    <td>
      <ul>
        <li>지정 휴무일 신청 및 병가, 반차 요청 등 요청사항 신청</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>탄력근무제</td>
    <td>
      <ul>
        <li>전체 근무일이 부족하거나 더 들어가고 싶을 때 요청</li>
        <li>지정 근무일이 필요할 경우 요청</li>
      </ul>
    </td>
  </tr>
</table>
