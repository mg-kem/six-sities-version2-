import {Map} from '../Map';
import {useState} from 'react';
import {OfferWrapperProps} from './OfferWrapper.types.ts';
import {Offer, Location} from '../../../../commonTypes/commonTypes.ts';
import {Offers} from '../Offers';
import {OffersEmpty} from '../OffersEmpty';

export function OffersWrapper({offers, activeCity}: OfferWrapperProps) {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const cityLocation: Location | undefined = offers.find((offer) => offer.city.name === activeCity)?.city.location;

  const handleMouseHover = (offer: Offer) => {
    setActiveOffer(offer);
  };


  return (
    <div
      className={`cities__places-container  ${offers.length === 0 ? 'cities__places-container--empty' : ''} container`}
    >
      {offers.length === 0 ? (<OffersEmpty/>) : (
        <Offers offers={offers} onMouseHover={handleMouseHover}/>)}
      <div className="cities__right-section">
        {offers.length > 0 &&
          <Map offers={offers} activeOffer={activeOffer} cityLocation={cityLocation as Location}/>}
      </div>
    </div>
  );
}
