const TodoList = ({ params, onDelete }) => {
  const children = [...params].map(el => {
    return (
      <li key={el.id}>
        <p>{el.name}</p>
        <button
          type="button"
          //   onClick={() => {
          //     deleteTodo(el.id);
          //   }}
          onClick={() => onDelete(el.id)}
        >
          delete
        </button>
      </li>
    );
  });

  return <ul>{children}</ul>;
};

export default TodoList;
