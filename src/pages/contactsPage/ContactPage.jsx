import { useEffect, useState } from 'react';
import allApi from '../../api/api';
import Form from '../../components/Forms/Form';

const ContactsPage = () => {
  const [todos, setTodos] = useState([]);
  const [deletedTodo, setDelitedTodo] = useState({});

  const getTodo = async () => {
    const data = await allApi.getDate();
    setTodos(data);
    return data;
  };

  const deleteTodo = async id => {
    const data = await allApi.deleteDate(id);
    console.log(data);
    setDelitedTodo(data);
    return data;
  };

  useEffect(() => {
    if (deletedTodo) {
      getTodo();
      return;
    }
    getTodo();
    return;
  }, [deletedTodo]);

  const [nameInputValue, setNameInputValue] = useState('');

  const handlerInput = e => {
    setNameInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>Contacts Page</h2>
      <Form
        nameInput="text"
        phoneInput="number"
        nameValue={nameInputValue}
        phoneValue="9999999"
        onInput={handlerInput}
      />
      <ul>
        {todos.map(el => {
          return (
            <li key={el.id}>
              <p>{el.name}</p>
              <button
                type="button"
                onClick={() => {
                  deleteTodo(el.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsPage;
