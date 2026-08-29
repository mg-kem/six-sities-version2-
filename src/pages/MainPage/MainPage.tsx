
import { Header } from '../../components/Header';
import { Navigation } from './components/Navigation';
import { Map } from '../../components/Map';
import { Offers } from './components/Offers';
import { MainPageProps } from './MainPage.types';


export function MainPage({ offers }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      {<Header />}
      <main className="page__main page__main--index">
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
