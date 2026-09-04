// import { Header } from '../../components/Header';
import {Navigation} from './components/Navigation';
import {MainPageProps} from './MainPage.types';
import {Helmet} from 'react-helmet-async';
import {OffersWrapper} from './components/OffersWrapper';
import {useState} from 'react';
import {cities} from '../../const/const.ts';


export function MainPage({offers}: MainPageProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(cities[0]);
  const handleChangeCity = (city: string) => {
    setActiveCity(city);
  };

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <Helmet>
          <title>Main Page</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        {<Navigation cities={cities} activeCity={activeCity} onChangeCity={handleChangeCity}/>}
        <div className="cities">
          <OffersWrapper offers={offers}/>
        </div>
      </main>
    </div>
  );
}
