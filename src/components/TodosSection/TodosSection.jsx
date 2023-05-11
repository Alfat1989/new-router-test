import { useState } from 'react';
import Form from '../Forms/Form';
import Input from '../input/Input';
import SubmitBtn from '../buttons/SubmitBtn';
import allApi from '../../api/api';

const TodosSection = ({ adddedFn }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addedTodo, setAddedTodo] = useState({});

  const addTodo = async obj => {
    const data = await allApi.addDate(obj);

    console.log(addedTodo);
    return data;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || phone === '') {
      return;
    }
    addTodo({ name, phone });
    adddedFn({ name, phone });
    setAddedTodo({ name, phone });
    setName('');
    setPhone('');
    console.log('SUBMITED :', `${name} : ${phone}`);
  };

  const handleInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value.trim());
        break;
      case 'phone':
        setPhone(e.target.value.trim());
        break;

      default:
        break;
    }
  };

  return (
    <section>
      <h2>TODOS SECTION</h2>
      <Form onSubmit={handleSubmit}>
        {
          <>
            <Input type="text" name="name" value={name} onInput={handleInput} />
            <Input
              type="phone"
              name="phone"
              value={phone}
              onInput={handleInput}
            />
            <SubmitBtn name="Add" type="submit" />
          </>
        }
      </Form>
    </section>
  );
};

export default TodosSection;
