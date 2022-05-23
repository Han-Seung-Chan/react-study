import React, { useState } from 'react';

function PhoneForm({ onCreate }) {
  const [inputName, setInputName] = useState('');
  const [inputNum, setInputNum] = useState('');
  const [id, setId] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    onCreate({ id: id, name: inputName, num: inputNum });
    setId(id + 1);
    setInputName('');
    setInputNum('');
  }

  function handleChange({ target }) {
    target.name === 'name'
      ? setInputName(target.value)
      : setInputNum(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name={'name'}
        onChange={handleChange}
        value={inputName}
        placeholder={'이름'}
      />
      <input
        name={'Num'}
        onChange={handleChange}
        value={inputNum}
        placeholder={'번호'}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default PhoneForm;
