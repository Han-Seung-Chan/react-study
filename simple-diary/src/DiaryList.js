import { useContext } from 'react';
import { DiaryStateContext } from './App';
import DiaryItem from './DiaryItem';

const DiaryList = () => {
  const diaryData = useContext(DiaryStateContext);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryData.length}개의 일기가 있습니다</h4>

      <div>
        {diaryData.map((list) => (
          <DiaryItem key={list.id} {...list} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
