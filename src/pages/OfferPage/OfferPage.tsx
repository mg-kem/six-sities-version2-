import {GalletyContainer} from './components/GalleryContainer';
import {AboutOffer} from './components/AboutOffer';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {mockOffers} from '../../mock/mock.ts';
import {Offer} from '../../commonTypes/commonTypes.ts';
import {OfferMap} from './components/OfferMap';
import {NearPlaces} from './components/NearPlaces';

export function OfferPage(): JSX.Element {
  const offerId = useParams<{ id: string }>();
  const offer = mockOffers.find(() => offerId === offerId);


  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <Helmet>
          <title>Offer Page</title>
        </Helmet>
        <section className="offer">
          <GalletyContainer/>
          <AboutOffer offer={offer as Offer}/>
          <OfferMap/>
        </section>
        <div className="container">
          <NearPlaces/>
        </div>
      </main>
    </div>

  );
}
