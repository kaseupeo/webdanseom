import { useState } from 'react';
import './WorkRequestResult.scss';
const WorkRequestResult = () => {
  const [requests, setRequests] = useState([
    {
      id: 0,
      name: '김영희',
      date: '2022-05-30',
      dutyCode: 'OFF',
      reason: '병가',
    },
  ]);

  const result = requests.map((request) => (
    <tr>
      <td>{request.id}</td>
      <td>{request.name}</td>
      <td>{request.date}</td>
      <td>{request.dutyCode}</td>
      <td>{request.reason}</td>
    </tr>
  ));
  return (
    <div className="WorkRequestResult">
      <div className="title">
        <b>-근무 요청 사항-</b>
      </div>

      <table>
        <thead>
          <tr>
            <th>순번</th>
            <th>간호사</th>
            <th>날짜</th>
            <th>듀티코드</th>
            <th>사유</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default WorkRequestResult;
