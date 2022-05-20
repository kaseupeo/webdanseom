import AuthTemplate from '../../components/auth/AuthTemplate';
import FindPasswordForm from '../../containers/auth/FindPasswordForm';
import FindPasswordPost from '../../components/auth/FindPasswordPost';
const FindPasswordPage = () => {
  return (
    <AuthTemplate title="비밀번호 찾기">
      <FindPasswordForm />
    </AuthTemplate>
  );
};

export default FindPasswordPage;
