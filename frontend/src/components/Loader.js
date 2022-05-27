import { red } from 'react-color/lib/helpers/color';
import ReactLoading from 'react-loading';

function Loader({ type, color, message }) {
  return (
    <div class="contentWrap">
      <div
        style={{
          position: 'fixed',

          top: '50%',

          left: '50%',

          transform: 'translate(-50%, -50%)',
        }}
      >
        <ReactLoading type={'balls'} color={red} height={'80%'} width={'80%'} />
      </div>
    </div>
  );
}

export default Loader;
