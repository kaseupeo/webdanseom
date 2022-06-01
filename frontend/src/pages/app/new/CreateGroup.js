import Title from '../../../components/app/common/Title';
import CreateGroup from '../../../containers/app/new/CreateGroupForm';
const CreateGroupPage = () => {
  return (
    <div>
      <span>
        <Title title="그룹 생성" />
      </span>
      <CreateGroup />
    </div>
  );
};

export default CreateGroupPage;
