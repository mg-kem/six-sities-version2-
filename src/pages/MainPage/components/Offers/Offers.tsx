import {OfferCard} from '../../../../components/OfferCard';
import {SortSelect} from '../SortSelect';
import {PlacesCount} from '../PlacesCount';
import {OffersProps} from './Offers.types';
import {useState} from 'react';
import {Offer} from '../../../../commonTypes/commonTypes.ts';


export function Offers({offers}: OffersProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  void activeOffer; // Временная мера, чтобы не ругался ESLint

  const handleMouseEnter = (offer: Offer) => {
    setActiveOffer(offer);
  };

  const countPlaces = offers.length;


  return (
    <section className="cities__places places">
      <PlacesCount count={countPlaces}/>
      <SortSelect/>
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => <OfferCard key={offer.id} onMouseEnter={() => handleMouseEnter(offer)} offer={offer}/>)
        }
      </div>
    </section>
  );
}
