import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Footer } from '../components/Footer/Footer';

export const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
