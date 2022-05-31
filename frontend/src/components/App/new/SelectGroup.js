import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import './SelectGroup.scss';

import { MdOutlineGroupAdd, MdOutlineGroups } from 'react-icons/md';
import CreateGroup from './CreateGroup';

const SelectGroup = ({ onClickMenu1, onClickMenu2 }) => {
  return (
    <div className="SelectGroup">
      <div className="group-area">
        <div className="group-wrap" onClick={onClickMenu1}>
          <MdOutlineGroupAdd className="group-icon" />
          <b>그룹 생성</b>
        </div>

        <div className="group-wrap" onClick={onClickMenu2}>
          <MdOutlineGroups className="group-icon" />
          <b>그룹 참여</b>
        </div>
      </div>
      <div className="menu-texts">
        <div className="menu-text">
          <b>
            수 간호사를 위한 그룹 생성 메뉴 입니다.
            <br />
            그룹 생성 후 다른 간호사들을 그룹에 초대할 수있습니다.
          </b>
        </div>

        <div className="menu-text">
          <b>
            일반 간호사를 위한 그룹 참여 메뉴 입니다.
            <br />
            그룹 초대코드를 통해 그룹에 참여할 수 있습니다.
          </b>
        </div>
      </div>
    </div>
  );
};

export default SelectGroup;
