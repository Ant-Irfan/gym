import { Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navigation/View';

export const NavRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      component={(props) => (
        <div>
          {
            localStorage.getItem("token") &&
            <><Navbar /><Component {...props} /></>
          }
        </div>
      )}
    />
);
export const RouteWithoutNavbar = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      component={(props) => (
        <div>
          <Component {...props} />
        </div>
      )}
    />
  );