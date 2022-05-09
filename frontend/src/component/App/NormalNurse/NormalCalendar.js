/**
 * file: NormalCalendar.js
 * 일반 간호사 달력 컴포넌트
 * 작성자: 정진욱
 */

import './NormalCalendar.scss';
import React, { useState } from 'react';
import moment, { Moment as MomentTypes } from 'moment';

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr className="tr" key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(index, 'day');

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td
                    className="td"
                    key={index}
                    style={{ backgroundColor: 'red' }}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <td
                    className="td"
                    key={index}
                    style={{ backgroundColor: 'gray' }}
                  >
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td className="td" key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
            })}
        </tr>,
      );
    }
    return result;
  };

  const Days = () => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];

    return (
      <tr>
        <th>일</th>
        <th>월</th>
        <th>화</th>
        <th>수</th>
        <th>목</th>
        <th>금</th>
        <th>토</th>
      </tr>
    );
  };
  return (
    <div className="Calendar">
      <div className="control">
        <button
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, 'month'));
          }}
        >
          이전달
        </button>
        <span>{today.format('YYYY 년 MM 월')}</span>
        <button
          onClick={() => {
            setMoment(getMoment.clone().add(1, 'month'));
          }}
        >
          다음달
        </button>
      </div>
      <table>
        <thead>{Days()}</thead>

        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
