import {Offer} from '../../../../commonTypes/commonTypes';

export type OffersProps = {
  offers: Offer[];
  onMouseHover: (offer: Offer) => void;
}
