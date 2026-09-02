
// import { Header } from '../../components/Header';
import { Navigation } from './components/Navigation';
import { Map } from '../../components/Map';
import { Offers } from './components/Offers';
import { MainPageProps } from './MainPage.types';
import { Helmet } from 'react-helmet-async';


export function MainPage({ offers }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <Helmet>
          <title>Main Page</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        {<Navigation />}
        <div className="cities">
          <div className="cities__places-container container">
            {<Offers offers={offers} />}
            {<Map />}
          </div>
        </div>
      </main>
    </div>
  );
}
