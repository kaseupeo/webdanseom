import './GroupTemplate.scss';
const AuthTemplate = ({ children, title }) => {
  return (
    <div className="GroupTemplate">
      <div className="temp-contents-area">{children}</div>
    </div>
  );
};

export default AuthTemplate;
