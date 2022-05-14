import AuthTemplate from '../../components/auth/AuthTemplate';
import Loginform from '../../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate title="로그인">
      <Loginform />
    </AuthTemplate>
  );
};

export default LoginPage;
