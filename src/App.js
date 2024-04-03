import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import setAuthToken from './helpers/setAuthToken.js';
import { loadUser } from './redux/actions/auth.js';
import store from './redux/store';

import { Theme } from './ThemeContext.js';
import Layout from './components/Layout/Layout';
import Services from './components/Services';
import { PAGES } from './constants.js';
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

const App = () => {
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
              <Route index element={<Home />} />
              <Route exact path={PAGES.REGISTER} element={<Register />} />
              <Route exact path={PAGES.LOGIN} element={<Login />} />
              <Route exact path={PAGES.ABOUT} element={<About />} />
              <Route exact path={PAGES.PORTFOLIO} element={<Portfolio />} />
              {/* <PrivateRoute exact path="/portfolio" component={<Portfolio />} /> */}

              <Route path={PAGES.CONTACT} element={<Contact />} />
              <Route path={PAGES.REVIEWS} element={<Reviews />} />
              <Route path={PAGES.SERVICES} element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
};

export default App;
