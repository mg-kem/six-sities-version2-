// import { Header } from '../../components/Header';
import {Navigation} from './components/Navigation';
import {MainPageProps} from './MainPage.types';
import {Helmet} from 'react-helmet-async';
import {OffersWrapper} from './components/OffersWrapper';
import {useState} from 'react';
import {cities} from '../../const/const.ts';
import {Offer} from '../../commonTypes/commonTypes.ts';


export function MainPage({offers}: MainPageProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(cities[0]);

  const handleChangeCity = (city: string) => {
    setActiveCity(city);
  };

  const filteredOffers: Offer[] = offers.filter((offer) => offer.city.name === activeCity);


  return (
    <div className="page page--gray page--main">
      <main className={`page__main page__main--index ${filteredOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <Helmet>
          <title>Main Page</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        {<Navigation cities={cities} activeCity={activeCity} onChangeCity={handleChangeCity}/>}
        <div className="cities">
          <OffersWrapper offers={filteredOffers} activeCity={activeCity}/>
        </div>
      </main>
    </div>
  );
}
