import {Map} from '../Map';
import {useState} from 'react';
import {OfferWrapperProps} from './OfferWrapper.types.ts';
import {Offer} from '../../../../commonTypes/commonTypes.ts';
import {Offers} from '../Offers';

export function OffersWrapper({offers}: OfferWrapperProps) {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  void activeOffer;

  const handleMouseHover = (offer: Offer) => {
    setActiveOffer(offer);
  };

  return (
    <div className="cities__places-container container">
      {<Offers offers={offers} onMouseHover={handleMouseHover}/>}
      <div className="cities__right-section">
        {<Map offers={offers}/>}
      </div>
    </div>
  );
}
