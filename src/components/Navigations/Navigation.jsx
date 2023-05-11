import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="posts">Posts</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;
