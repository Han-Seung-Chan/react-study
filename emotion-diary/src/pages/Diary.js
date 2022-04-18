import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import { emotionList } from '../utility/emotion';
import { getStringDate } from '../utility/util';

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];

    titleElement.innerHTML = `Diary - ${id}번 일기`;
  });

  useEffect(() => {
    if (!diaryList.length) return;

    const targetDiary = diaryList.find(
      (list) => parseInt(list.id) === parseInt(id)
    );

    if (!targetDiary) {
      alert('없는 일기입니다');
      navigate('/', { replace: true });
    }

    setData(targetDiary);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, diaryList]);

  if (!data) return <div className="DiaryPage">로딩중입니다...</div>;

  const curEmotionList = emotionList.find(
    (list) => parseInt(list.emotion_id) === parseInt(data.emotion)
  );

  return (
    <div className="DiaryPage">
      <MyHeader
        headText={`${getStringDate(new Date(data.date))} 기록`}
        leftChild={
          <MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)} />
        }
        rightChild={
          <MyButton
            text={'수정하기'}
            onClick={() => navigate(`/edit/${data.id}`)}
          />
        }
      />
      <article>
        <section>
          <h4>오늘의 감정</h4>
          <div
            className={[
              'diary_img_wrapper',
              `diary_img_wrapper_${data.emotion}`,
            ].join(' ')}
          >
            <img src={curEmotionList.emotion_img} alt="감정 이모티콘" />
            <div className="emotion_description">
              {curEmotionList.emotion_description}
            </div>
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="diary_content_wrapper">
            <p>{data.content}</p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Diary;
