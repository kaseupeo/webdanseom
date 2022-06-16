/**
 * file: NormalMain.js
 * 수 간호사 조회메뉴(메인)
 * 작성자: 정진욱
 */
import Title from '../../../components/app/common/Title';

import WorkHeadSelectForm from '../../../containers/app/head/WorkHeadSelectForm';

const NormalSelectWork = () => {
  return (
    <div>
      <span>
        <Title title="근무표 조회" />
      </span>
      <WorkHeadSelectForm />
    </div>
  );
};

export default NormalSelectWork;
