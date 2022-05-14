import AuthTemplate from '../../components/auth/AuthTemplate';
import FindPassword from '../../components/auth/FindPassword';

const FindPasswordPage = () => {
  return (
    <AuthTemplate title="비밀번호 변경">
      <FindPassword />
    </AuthTemplate>
  );
};

export default FindPasswordPage;
