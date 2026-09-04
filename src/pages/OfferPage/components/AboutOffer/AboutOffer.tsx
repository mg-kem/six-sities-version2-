import {Reviews} from '../Reviews';

import {AboutOfferProps} from './AboutOffer.types.ts';
import {calculateRating} from '../../../../utils/utils.ts';
import {InsideOffer} from '../InsideOffer';
import {AboutHost} from '../AboutHost';

export function AboutOffer({offer}: AboutOfferProps): JSX.Element {
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {
          offer.isPremium && (
            <div className="offer__mark">
              <span>Premium</span>
            </div>
          )
        }
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {offer.title}
          </h1>
          <button className="offer__bookmark-button button" type="button">
            <svg className="offer__bookmark-icon" width={31} height={33}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{width: `${calculateRating(offer.rating as number)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{offer.rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">{offer.type}</li>
          <li className="offer__feature offer__feature--bedrooms">
            3 Bedrooms
          </li>
          <li className="offer__feature offer__feature--adults">
            Max 4 adults
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">€{offer.price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <InsideOffer/>
        <AboutHost/>
        <Reviews/>
      </div>
    </div>
  );
}
