import { useReducer } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneList';

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case 'CREATE':
      newState = [action.data, ...state];
      break;
    case 'REMOVE':
      newState = state.filter((info) => info.id !== action.id);
      break;
    case 'UPDATE':
      newState = state.map((info) =>
        info.id === action.id ? { ...action.data } : info
      );
      break;
    default:
      return state;
  }
  console.log(newState);
  return newState;
}

function App() {
  const [information, dispatch] = useReducer(reducer, []);

  function handleCreate(newData) {
    dispatch({
      type: 'CREATE',
      data: newData,
    });
  }

  function handleRemove(id) {
    dispatch({
      type: 'REMOVE',
      id: id,
    });
  }

  function handleUpdate(id, newData) {
    console.log(newData);
    dispatch({
      type: 'UPDATE',
      id: id,
      data: newData,
    });
  }

  return (
    <div>
      <PhoneForm onCreate={handleCreate} />
      <PhoneInfoList
        data={information}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
