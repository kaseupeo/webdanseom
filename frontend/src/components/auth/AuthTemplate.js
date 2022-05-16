import './AuthTemplate.scss';
const AuthTemplate = ({ children, title }) => {
  return (
    <div className="AuthTemplate">
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default AuthTemplate;
