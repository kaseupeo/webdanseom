import Title from '../../../components/app/common/Title';
import WorkSheetForm from '../../../containers/app/head/WorkSheetForm';

const ManagementWork = () => {
  return (
    <div>
      <span>
        <Title title="근무표 관리" />
      </span>

      <WorkSheetForm />
    </div>
  );
};

export default ManagementWork;
