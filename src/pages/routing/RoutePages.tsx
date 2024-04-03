import { Route } from 'react-router-dom';
import Services from '../../components/Services';
import { PAGES } from '../../constants';
import NotFound from '../NotFound';
import About from '../about/About';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Contact from '../contact/Contact';
import { Home } from '../home/Home';
import Reviews from '../reviews';

const RoutePages: React.FC = () => {
  return (
    <>
      <Route index element={<Home />} />
      <Route path={PAGES.REGISTER} element={<Register />} />
      <Route path={PAGES.LOGIN} element={<Login />} />
      <Route path={PAGES.ABOUT} element={<About />} />
      {/* <PrivateRoute exact path="/portfolio" component={<Portfolio />} /> */}
      <Route path={PAGES.CONTACT} element={<Contact />} />
      <Route path={PAGES.REVIEWS} element={<Reviews />} />
      <Route path={PAGES.SERVICES} element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </>
  );
};

export default RoutePages;
