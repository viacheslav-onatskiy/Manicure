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

const RoutePages = () => {
  return (
    <>
      <Route index element={<Home />} />
      <Route exact path="register" element={<Register />} />
      <Route exact path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      {/* <PrivateRoute exact path="/portfolio" component={<Portfolio />} /> */}
      <Route exact path="contact" element={<Contact />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </>
  );
};

export default RoutePages;
