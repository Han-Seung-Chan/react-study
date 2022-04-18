import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import DiaryEditor from '../components/DiaryEditor';

const Edit = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];

    titleElement.innerHTML = `Diary - ${id}번 일기 수정`;
  });

  const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  const { id } = useParams();

  const [originData, setOriginData] = useState();

  useEffect(() => {
    if (!diaryList.length) return;

    const targetDiary = diaryList.find(
      (list) => parseInt(list.id) === parseInt(id)
    );

    if (!targetDiary) navigate('/', { replace: true });

    setOriginData(targetDiary);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
