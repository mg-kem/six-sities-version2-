import {mockOffers} from '../../../../mock/mock.ts';
import {OfferCard} from '../../../../components/OfferCard';
import {Offer} from '../../../../commonTypes/commonTypes.ts';

export function NearPlaces(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {
          mockOffers.slice(0, 3).map((offer: Offer) => <OfferCard key={offer.id} offer={offer}/>)
        }
      </div>
    </section>
  );
}
