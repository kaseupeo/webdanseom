import Title from '../../../components/app/common/Title';
import JoinGroup from '../../../containers/app/new/JoinGroupForm';
const JoinGroupPage = () => {
  return (
    <div>
      <span>
        <Title title="그룹 참여" />
      </span>
      <JoinGroup />
    </div>
  );
};

export default JoinGroupPage;
