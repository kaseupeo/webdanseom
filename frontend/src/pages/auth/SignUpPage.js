import AuthTemplate from '../../components/auth/AuthTemplate';
import SignUpElement from '../../components/auth/SignUpElement';

const SignUpPage = () => {
  return (
    <AuthTemplate title="회원가입">
      <SignUpElement />
    </AuthTemplate>
  );
};

export default SignUpPage;
