import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetailDiary = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div
        className={[
          'emotion_img_wrapper',
          `emotion_img_wrapper_${emotion}`,
        ].join(' ')}
        onClick={goDetailDiary}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt="감정 이모티콘"
        />
      </div>
      <div className="info_wrapper" onClick={goDetailDiary}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={'수정하기'} onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
