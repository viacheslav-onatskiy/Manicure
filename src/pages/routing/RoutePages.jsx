import { Route } from 'react-router-dom';
import { Home } from '../home/Home';
import Register from '../auth/Register';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';
import Login from '../auth/Login';
import PrivateRoute from './PrivateRoute';
import Contact from '../contact/Contact';
import Reviews from '../reviews';
import Services from '../../components/Services';
import NotFound from '../NotFound';
import { PAGES } from '../../constants';

const RoutePages = () => {
  return (
    <>
      <Route index element={<Home />} />
      <Route exact path={PAGES.REGISTER} element={<Register />} />
      <Route exact path={PAGES.LOGIN} element={<Login />} />
      <Route path={PAGES.ABOUT} element={<About />} />
      {/* <PrivateRoute exact path="/portfolio" component={<Portfolio />} /> */}
      <Route exact path={PAGES.CONTACT} element={<Contact />} />
      <Route path={PAGES.REVIEWS} element={<Reviews />} />
      <Route path={PAGES.SERVICES} element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </>
  );
};

export default RoutePages;
