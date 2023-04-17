import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="posts">Posts</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
