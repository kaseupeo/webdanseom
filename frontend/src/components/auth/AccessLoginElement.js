import './AccessLoginElement.scss';
import { BsPersonCircle } from 'react-icons/bs';
const AccessLoginElement = ({ name, email, onClickAccess, onClickLogout }) => {
  return (
    <div className="AccessLoginElement">
      <div className="accessBtn" onClick={onClickAccess}>
        <BsPersonCircle className="icon" />
        {name} &#40;{email}&#41;님
      </div>
      <button className="logoutBtn" onClick={onClickLogout}>
        로그 아웃
      </button>
    </div>
  );
};

export default AccessLoginElement;
