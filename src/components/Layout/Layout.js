import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PAGES } from '../../constants.js';
import Footer from '../Footer';
import Header from '../Header';
import ScrollToTopButton from '../atoms/ScrollToTop/ScrollToTop.js';
import { MainOutlet } from './styles.js';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const defineDocumentTitle = (name = '') => {
      document.title = `${name && name + ' | '}Yana Nails`;
    };

    switch (location.pathname) {
      case PAGES.ABOUT:
        defineDocumentTitle('About me');
        break;
      case PAGES.PORTFOLIO:
        defineDocumentTitle('My Portfolio');
        break;
      case PAGES.REVIEWS:
        defineDocumentTitle('Reviews');
        break;
      case PAGES.SERVICES:
        defineDocumentTitle('Services');
        break;
      case PAGES.CONTACT:
        defineDocumentTitle('My Contacts');
        break;
      case PAGES.LOGIN:
        defineDocumentTitle('Login');
        break;
      case PAGES.REGISTER:
        defineDocumentTitle('Register');
        break;

      default:
        defineDocumentTitle();
        break;
    }
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
