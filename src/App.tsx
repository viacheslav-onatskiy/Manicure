import { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import setAuthToken from './helpers/setAuthToken';
import { loadUser } from './redux/actions/auth';
import store from './redux/store';

import { Theme } from './ThemeContext';
import Layout from './components/Layout';
import Services from './components/Services';
import { PAGES } from './constants';
import {
  About,
  Contact,
  Home,
  Login,
  NotFound,
  Portfolio,
  Register,
  Reviews
} from './pages';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

interface RouteElement {
  path: string;
  element: JSX.Element;
}

const routes: RouteElement[] = [
  { path: PAGES.HOME, element: <Home /> },
  { path: PAGES.REGISTER, element: <Register /> },
  { path: PAGES.LOGIN, element: <Login /> },
  { path: PAGES.ABOUT, element: <About /> },
  { path: PAGES.PORTFOLIO, element: <Portfolio /> },
  { path: PAGES.CONTACT, element: <Contact /> },
  { path: PAGES.REVIEWS, element: <Reviews /> },
  { path: PAGES.SERVICES, element: <Services /> },
  { path: '*', element: <NotFound /> }
];

const App: FC = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit');

    if (!isFirstVisit) {
      localStorage.setItem('isFirstVisit', 'true');
    }
  }, []);

  return (
    <>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path={PAGES.HOME} element={<Layout />}>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
};

export default App;
