import type {PrivateRouteProps} from './PrivateRoute.types';
import {AuthorizationStatus} from '../../const/const.ts';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const/const.ts';


export function PrivateRoute({authStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth ?
      children :
      <Navigate to={AppRoute.Login}/>
  );
}
