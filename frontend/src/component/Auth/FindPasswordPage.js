import AuthTemplate from './AuthTemplate';
import FindPassword from './FindPassword';

const FindPasswordPage = () => {
  return (
    <AuthTemplate title="비밀번호 변경">
      <FindPassword />
    </AuthTemplate>
  );
};

export default FindPasswordPage;
