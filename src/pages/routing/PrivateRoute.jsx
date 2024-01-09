import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../redux/hooks';
import { PAGES } from '../../constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Navigate to={PAGES.LOGIN} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
