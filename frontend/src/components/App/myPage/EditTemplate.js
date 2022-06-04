import React from 'react';
import './EditTemplate.scss';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
const EditTemplate = ({ children }) => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <div className="EditTemplate">
      <div className="edit-box">
        <div className="backBtn" onClick={onClickBack}>
          <IoMdArrowRoundBack className="icon" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default EditTemplate;
