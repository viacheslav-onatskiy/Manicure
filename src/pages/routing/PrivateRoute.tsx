import { ComponentType } from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { PAGES } from '../../constants';
import { useAuth } from '../../redux/hooks';

// Todo: any
interface PrivateRouteProps {
  component: ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps & RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated, loading } = useAuth();

  if (!isAuthenticated && !loading) return <Navigate to={PAGES.LOGIN} />;

  return (
    <Route
      {...rest}
      // render={(props: any) =>
      //   !isAuthenticated && !loading ? (
      //     <Navigate to={PAGES.LOGIN} />
      //   ) : (
      //     <Component {...props} />
      //   )
      // }
    />
  );
};

export default PrivateRoute;
