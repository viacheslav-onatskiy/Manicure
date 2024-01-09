import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import setAuthToken from './helpers/setAuthToken.js';
import store from './redux/store';
import { loadUser } from './redux/actions/auth.js';

import Contact from './pages/contact/Contact.js';
import About from './pages/about/About.js';
import Layout from './components/Layout/Layout';
import { Home } from './pages/home/Home.js';
import Services from './components/Services';
import Reviews from './pages/reviews/index.js';
import Register from './pages/auth/Register.jsx';
import Login from './pages/auth/Login.jsx';
import NotFound from './pages/NotFound.js';
import Portfolio from './pages/portfolio/Portfolio.jsx';
import { Theme } from './ThemeContext.js';
import { PAGES } from './constants.js';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
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
