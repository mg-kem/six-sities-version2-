import { OfferCard } from '../../../../components/OfferCard';
import { SortSelect } from '../SortSelect';
import { PlacesCount } from '../PlacesCount';
import { OffersProps } from './Offers.types';

export function Offers({ offers }: OffersProps): JSX.Element {
  const countPlaces = offers.length;

  return (
    <section className="cities__places places">
      <PlacesCount count={countPlaces} />
      <SortSelect />
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)
        }
      </div>
    </section>
  );
}
