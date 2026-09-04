import {Location, Offer} from '../../../../commonTypes/commonTypes.ts';

export type MapProps = {
  offers: Offer[];
  activeOffer: Offer | null;
  cityLocation: Location;
}
