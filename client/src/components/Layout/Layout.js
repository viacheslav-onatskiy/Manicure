import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from '../atoms/ScrollToTop/ScrollToTop.js';
import { MainOutlet } from './styles.js';
import { useEffect } from 'react';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />

      <ToastContainer newestOnTop autoClose={2000} limit={2} />

      <MainOutlet>
        <Outlet />
      </MainOutlet>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
