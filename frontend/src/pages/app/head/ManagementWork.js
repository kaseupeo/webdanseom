import Title from '../../../components/app/common/Title';
import WorkSheet from '../../../components/app/head/WorkSheet';
import WorkSchedule from '../../../components/app/head/WorkSchedule';
import WorkManagementBtn from '../../../components/app/head/WorkManagementBtn';
const ManagementWork = () => {
  return (
    <div>
      <span>
        <Title title="근무표 관리" />
        <WorkManagementBtn />
      </span>

      <WorkSheet>
        <WorkSchedule />
      </WorkSheet>
    </div>
  );
};

export default ManagementWork;
