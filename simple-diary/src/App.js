import './App.css';
import React, {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
} from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const newItem = {
        ...action.data,
      };
      return [newItem, ...state];
    }
    case 'REMOVE': {
      return state.filter((value) => value.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map((list) =>
        list.id === action.targetId
          ? { ...list, contents: action.newContents }
          : list
      );
    }
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext(null);
export const DiaryDispatchContext = React.createContext(null);

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(1);

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const result = await res.json();

    const initData = result.slice(0, 20).map((data) => {
      return {
        writer: data.email,
        contents: data.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    dispatch({ type: 'INIT', data: initData });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((writer, contents, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        writer,
        contents,
        emotion,
        id: dataId.current,
        date: new Date().getTime(),
      },
    });

    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  }, []);

  const onEdit = useCallback((targetId, newContents) => {
    dispatch({ type: 'EDIT', targetId, newContents });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((data) => data.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatch}>
        <div className="App">
          <DiaryEditor />
          <div> ?????? ?????? ??????: {data.length}</div>
          <div>?????? ?????? ?????? ??????: {goodCount}</div>
          <div>?????? ?????? ?????? ??????: {badCount}</div>
          <div>?????? ?????? ?????? ?????? : {goodRatio}%</div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
