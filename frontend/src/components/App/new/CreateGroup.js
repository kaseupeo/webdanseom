const CreateGroup = () => {
  return (
    <div>
      <div className="dialog-title">
        <h2>그룹 생성</h2>
        <button>X</button>
      </div>
      <div className="dialog-content">
        <label>그룹명: </label>
        <input type="text" />
      </div>
      <div className="dialog-footer">
        <button>그룹 생성</button>
      </div>
    </div>
  );
};

export default CreateGroup;
