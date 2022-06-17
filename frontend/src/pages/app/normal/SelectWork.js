/**
 * file: NormalMain.js
 * 수 간호사 조회메뉴(메인)
 * 작성자: 정진욱
 */
import Title from '../../../components/app/common/Title';

import WorkNormalSelectForm from '../../../containers/app/normal/WorkNormalSelectForm';

const NormalSelectWork = () => {
  return (
    <div>
      <span>
        <Title title="근무표 조회" />
      </span>
      <WorkNormalSelectForm />
    </div>
  );
};

export default NormalSelectWork;
