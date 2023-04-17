const Input = ({ name, onInput, ...other }) => {
  return (
    <input
      type={other.type}
      name={name}
      value={other.value}
      onInput={onInput}
    />
  );
};

export default Input;
