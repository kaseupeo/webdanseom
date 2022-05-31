import Title from '../../../components/app/common/Title';
import SelectGroup from '../../../containers/app/new/SelectGroupForm';
const ManagementWork = () => {
  return (
    <div>
      <span>
        <Title title="그룹 생성/참여" />
      </span>
      <SelectGroup />
    </div>
  );
};

export default ManagementWork;
