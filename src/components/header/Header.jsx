import Navigation from 'components/navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import s from './Header.module.css';
import Loader from 'components/Loader';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Navigation />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
