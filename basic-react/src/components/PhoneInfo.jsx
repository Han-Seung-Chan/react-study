import React, { useState } from 'react';

function PhoneInfo({ onRemove, onUpdate, info }) {
  const [editing, setEditing] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputNum, setInputNum] = useState('');

  function handleChange({ target }) {
    target.name === 'name'
      ? setInputName(target.value)
      : setInputNum(target.value);
  }

  function handleRemove(id) {
    onRemove(id);
  }

  function handleToggleEdit(id) {
    if (editing) {
      onUpdate(id, { id: id, name: inputName, num: inputNum });
    } else {
      setEditing({
        name: inputName,
        num: inputNum,
      });
    }

    setEditing(!editing);
  }

  const style = {
    border: '1px solid black',
    padding: '8px',
    margin: '8px',
  };

  return (
    <div style={style}>
      {editing ? (
        <>
          <div>
            <input name="name" onChange={handleChange} value={inputName} />
          </div>
          <div>
            <input name="phone" onChange={handleChange} value={inputNum} />
          </div>
        </>
      ) : (
        <>
          <div>
            <b>{info.name}</b>
          </div>
          <div>{info.num}</div>
        </>
      )}
      <button onClick={() => handleRemove(info.id)}>삭제</button>
      <button onClick={() => handleToggleEdit(info.id)}>
        {editing ? '적용' : '수정'}
      </button>
    </div>
  );
}

export default PhoneInfo;
