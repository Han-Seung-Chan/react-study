import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './MyButton';
import DiaryItem from './DiaryItem';

const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' },
];

const filterOptionList = [
  { value: 'all', name: '전부다' },
  { value: 'good', name: '좋은 감정만' },
  { value: 'bad', name: '안좋은 감정만' },
];

const ControllerMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={({ target }) => onChange(target.value)}
    >
      ;
      {optionList.map((list, idx) => (
        <option key={idx} value={list.value}>
          {list.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');

  const getProcessedDiaryList = () => {
    const filterCallBack = (list) => {
      if (filter === 'good') return parseInt(list.emotion) <= 3;
      if (filter === 'bad') return parseInt(list.emotion) > 3;
    };

    const compare = (a, b) => {
      if (sortType === 'latest') return parseInt(b.date) - parseInt(a.date);
      if (sortType === 'oldest') return parseInt(a.date) - parseInt(b.date);
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === 'all'
        ? copyList
        : copyList.filter((list) => filterCallBack(list));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControllerMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControllerMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>

        <div className="right_col">
          <MyButton
            type={'positive'}
            text={'새 일기 쓰기'}
            onClick={() => navigate('/new')}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((list) => (
        <DiaryItem key={list.id} {...list} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
