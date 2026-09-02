import {mockOffers} from '../mock/mock';
import {MainPage} from '../pages/MainPage';
import {OfferPage} from '../pages/OfferPage';
import {ErrorPage} from '../pages/ErrorPage';
import {Layout} from '../components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FavoritesPage} from '../pages/FavoritesPage';
import {AppRoute} from '../const/const.ts';
import {PrivateRoute} from '../components/PrivateRoute';
import {LoginPage} from '../pages/LoginPage';
import {LayoutLoginPage} from '../components/LayoutLoginPage';
import {HelmetProvider} from 'react-helmet-async';
import {ScrollToTop} from '../components/ScrollToTop';
import {currentAuthStatus} from '../const/const.ts';

export function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.Login} element={<LayoutLoginPage/>}>
            <Route index element={<LoginPage/>}/>
          </Route>
          <Route path="/" element={<Layout authStatus={currentAuthStatus()}/>}>
            <Route index element={<MainPage offers={mockOffers}/>}/>
            <Route path={AppRoute.Offer} element={<OfferPage/>}/>
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authStatus={currentAuthStatus()}>
                <FavoritesPage/>
              </PrivateRoute>
            }
            />
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
