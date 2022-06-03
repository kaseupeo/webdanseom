import { Link, useNavigate } from 'react-router-dom';
import './NotFound404.scss';
import { BiError } from 'react-icons/bi';
const NotFound404 = () => {
  const navigate = useNavigate();
  return (
    <div className="NotFound404">
      <div className="content">
        <BiError className="icon" />

        <h2 class="title">요청하신 페이지를 찾을 수 없습니다.</h2>
        <div class="text">존재하지 않는 주소를 입력하셨거나</div>
        <div class="text">
          요청하신 페이지 주소가 변경, 삭제되어 찾을 수 없습니다.
        </div>
        <div class="text">
          입력하신 주소가 정확한지 다시 한 번 확인 해주시기 바랍니다.
        </div>
        <div>
          <button
            className="btnBack"
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로 가기
          </button>
          <button className="btnHome">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              홈페이지로 이동
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
