import AuthTemplate from './AuthTemplate';
import SignUpElement from './SignUpElement';

const SignUpPage = ({ children, title }) => {
  return (
    <AuthTemplate title="회원가입">
      <SignUpElement />
    </AuthTemplate>
  );
};

export default SignUpPage;
