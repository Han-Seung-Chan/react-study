import React, { useRef, useState, useContext } from 'react';
import { DiaryDispatchContext } from './App';

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const [state, setState] = useState({
    writer: '',
    contents: '',
    emotion: 1,
  });

  const writerInput = useRef();
  const contentsInput = useRef();

  const handelChangeState = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handelSubmit = () => {
    if (!state.writer.length) {
      writerInput.current.focus();
      return;
    }

    if (state.contents.length < 5) {
      contentsInput.current.focus();
      return;
    }

    onCreate(state.writer, state.contents, state.emotion);
    setState({
      writer: '',
      contents: '',
      emotion: 1,
    });
    alert('저장성공');
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="writer"
          value={state.writer}
          onChange={handelChangeState}
          ref={writerInput}
          autoComplete="off"
        />
      </div>

      <div>
        <textarea
          name="contents"
          value={state.contents}
          onChange={handelChangeState}
          ref={contentsInput}
        />
      </div>

      <div>
        <b>오늘의 감정점수 : </b>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handelChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div>
        <button onClick={handelSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
