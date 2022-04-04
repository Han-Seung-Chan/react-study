import React, { useState, useRef, useContext } from 'react';
import { DiaryDispatchContext } from './App';

const DiaryItem = ({ id, writer, emotion, date, contents }) => {
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  const handelRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) onRemove(id);
  };

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContents, setLocalContents] = useState(contents);
  const localContentsInput = useRef();

  const handelQuitEdit = () => {
    setIsEdit(false);
    setLocalContents(contents);
  };

  const handelEdit = () => {
    if (localContents.length < 5) {
      localContentsInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 정말 수정하시겠습니까?`)) {
      onEdit(id, localContents);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {writer} | 감정점수 : {emotion}
        </span>
        <br />

        <span className="date">{new Date(date).toLocaleString()}</span>
      </div>

      <div className="contents">
        {isEdit ? (
          <>
            <textarea
              ref={localContentsInput}
              value={localContents}
              onChange={({ target }) => setLocalContents(target.value)}
            />
          </>
        ) : (
          <>{contents}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handelQuitEdit}>수정 취소</button>
          <button onClick={handelEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handelRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
