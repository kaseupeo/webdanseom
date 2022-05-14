import AuthTemplate from '../../comonents/AuthTemplate';
import FindPassword from '../../comonents/FindPassword';

const FindPasswordPage = () => {
  return (
    <AuthTemplate title="비밀번호 변경">
      <FindPassword />
    </AuthTemplate>
  );
};

export default FindPasswordPage;
