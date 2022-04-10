import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');

  console.log(id);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 Edit</p>
      <button onClick={() => setSearchParams({ who: 'Khan' })}>
        쿼리 변경
      </button>

      <button
        onClick={() => {
          navigate('/Home');
        }}
      >
        홈으로 가기
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
