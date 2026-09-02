import {AuthorizationStatusType} from '../../const/const.ts';

export type PrivateRouteProps = {
  authStatus: AuthorizationStatusType;
  children: JSX.Element;
};
