import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../Navigations/Navigation';

const Layout = () => {
  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Navigation />
        <NavLink to={'registration'}>Registration</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
