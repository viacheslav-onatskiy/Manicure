import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from '../atoms/ScrollToTop/ScrollToTop.js';
import { MainOutlet } from './styles.js';

const Layout = () => {
  return (
    <>
      <Header />

      <ToastContainer newestOnTop autoClose={2000} />

      <MainOutlet>
        <Outlet />
      </MainOutlet>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
