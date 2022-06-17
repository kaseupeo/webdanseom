import Title from '../../../components/app/common/Title';

import WorkNormalSelectForm from '../../../containers/app/normal/WorkNormalSelectForm';

const NormalSelectWork = () => {
  return (
    <div>
      <span>
        <Title title="근무 요청" />
      </span>
      <WorkNormalSelectForm />
    </div>
  );
};

export default NormalSelectWork;
