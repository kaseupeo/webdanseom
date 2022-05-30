import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import './tempContents.scss';

const AddGroupDialog = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    openDialog: () => {
      openDialog();
    },
  }));

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickAddButton = () => {
    console.log(inputValue);
    alert('그룹 생성');
  };

  return (
    <div className={open ? 'dialog addGroup' : 'dialog addGroup close'}>
      <div className="dialog-title">
        <h2>그룹 생성</h2>
        <button onClick={closeDialog}>X</button>
      </div>
      <div className="dialog-content">
        <label>그룹명: </label>
        <input type="text" onChange={onChangeInput} maxLength="50" />
      </div>
      <div className="dialog-footer">
        <button onClick={onClickAddButton}>그룹 생성</button>
      </div>
    </div>
  );
});

const JoinGroupDialog = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    openDialog: () => {
      openDialog();
    },
  }));

  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onClickJoinButton = () => {
    console.log(inputValue);
    alert('그룹 참가');
  };

  return (
    <div className={open ? 'dialog joinGroup' : 'dialog joinGroup close'}>
      <div className="dialog-title">
        <h2>그룹 참가</h2>
        <button onClick={closeDialog}>X</button>
      </div>
      <div className="dialog-content">
        <label>초대링크: </label>
        <input type="text" onChange={onChangeInput} maxLength="50" />
      </div>
      <div className="dialog-footer">
        <button onClick={onClickJoinButton}>그룹 참가</button>
      </div>
    </div>
  );
});

const TempContents = () => {
  const addGroupRef = useRef();
  const joinGroupRef = useRef();

  const openAddGroup = () => {
    addGroupRef.current.openDialog();
  };
  const openJoinGroup = () => {
    joinGroupRef.current.openDialog();
  };

  return (
    <div className="temp-contents-area">
      <div className="title-wrap">
        <h2>Nurse on Duty</h2>
      </div>
      <div className="group-area">
        <div className="group-wrap" onClick={openAddGroup}>
          <img src={''} alt="add group" /> {/* 여기에 이미지 넣어주세요 */}
          <label>그룹 생성</label>
        </div>

        <div className="group-wrap">
          <img src={''} alt="join group" onClick={openJoinGroup} />{' '}
          {/* 여기에 이미지 넣어주세요 */}
          <label>그룹 참여</label>
        </div>
      </div>
      <AddGroupDialog ref={addGroupRef} />
      <JoinGroupDialog ref={joinGroupRef} />
    </div>
  );
};

export default TempContents;
