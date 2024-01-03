import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../redux/hooks';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? <Navigate to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
