const Input = ({ ...other }) => {
  return (
    <input
      type={other.type}
      name={other.name}
      value={other.value}
      onInput={other.onInput}
      // autoComplete="off"
      autocomplete="off"
    />
  );
};

export default Input;
