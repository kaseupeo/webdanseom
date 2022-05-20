import Title from '../../../components/app/common/Title';
import WorkSheet from '../../../components/app/head/WorkSheet';
import WorkSchedule from '../../../components/app/head/WorkSchedule';
import WorkManagementBtn from '../../../components/app/head/WorkManagementBtn';
import WorkScheduleSum from '../../../components/app/head/WorkScheduleSum';
const ManagementWork = () => {
  return (
    <div>
      <span>
        <Title title="근무표 관리" />
      </span>

      <WorkSheet>
        <WorkManagementBtn />
        <WorkSchedule />
        <WorkScheduleSum />
      </WorkSheet>
    </div>
  );
};

export default ManagementWork;
