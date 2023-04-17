import Input from '../input/Input';

const Form = ({ InputName, onInput, ...other }) => {
  return (
    <div>
      <form>
        <Input
          type={other.nameInput}
          value={other.nameValue}
          onInput={onInput}
        />
        <Input
          type={other.phoneInput}
          value={other.phoneValue}
          onInput={onInput}
        />
        <button type={''}>Add</button>
      </form>
    </div>
  );
};

export default Form;
