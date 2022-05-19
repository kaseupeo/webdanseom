import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm, hidingMenu } from '../../../modules/menu';

import TopNavigation from '../../../components/app/appNavigation/TopNavigation';

const TopNavigationForm = () => {
  const [error, setError] = useState('');
  const [checkHiding, setCheckHiding] = useState(false);
  const dispatch = useDispatch();
  const { form, response, responseError } = useSelector(({ menu }) => ({
    form: menu.hidingMenu,
    response: menu.response,
    responseError: menu.responseError,
  }));

  // 인풋 변경 이벤트 핸들러
  const onClickMenu = (e) => {
    e.preventDefault();
    if (checkHiding) setCheckHiding(false);
    else setCheckHiding(true);
    dispatch(hidingMenu(checkHiding));
  };
  // 폼 등록 이벤트 핸들러

  useEffect(() => {
    dispatch(initializeForm('hidingMenu'));
  }, [dispatch]);

  return <TopNavigation form={form} onClickMenu={onClickMenu} />;
};

export default TopNavigationForm;
