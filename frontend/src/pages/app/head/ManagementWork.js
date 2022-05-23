import Title from '../../../components/app/common/Title';
import WorkSheetForm from '../../../containers/app/head/WorkSheetForm';
import WorkRequestResult from '../../../components/app/head/WorkRequestResult';
const ManagementWork = () => {
  return (
    <div>
      <span>
        <Title title="근무표 관리" />
      </span>

      <WorkSheetForm />
      <WorkRequestResult />
    </div>
  );
};

export default ManagementWork;
