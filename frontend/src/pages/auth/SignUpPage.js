import AuthTemplate from '../../components/auth/AuthTemplate';
import SignUpForm from '../../containers/auth/SignUpForm';

const SignUpPage = () => {
  return (
    <AuthTemplate title="회원가입">
      <SignUpForm />
    </AuthTemplate>
  );
};

export default SignUpPage;
