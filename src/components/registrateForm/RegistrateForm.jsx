import { useState } from 'react';
import Form from '../Forms/Form';
import Input from '../input/Input';
import SubmitBtn from '../buttons/SubmitBtn';

const RegistrateForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('SUBMIT :', { name, email, password });
    breakForm();
  };

  function breakForm() {
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={name} name="name" onInput={handleInput} />
      <Input type="email" value={email} name="email" onInput={handleInput} />
      <Input
        type="password"
        value={password}
        name="password"
        onInput={handleInput}
      />
      <SubmitBtn type={'submit'} name={'Sign up'} />
    </Form>
  );
};

export default RegistrateForm;
