/**
 * file: NormalMain.js
 * 수 간호사 조회메뉴(메인)
 * 작성자: 정진욱
 */
import Title from '../../../components/app/common/Title';

import Calendar from '../../../components/app/common/Calendar';

const NormalSelectWork = () => {
  return (
    <div>
      <span>
        <Title title="근무표 조회" />
      </span>
      <Calendar />
    </div>
  );
};

export default NormalSelectWork;
