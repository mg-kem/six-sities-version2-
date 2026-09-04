import {Link, generatePath} from 'react-router-dom';
import {OfferCardProps} from './OfferCard.types';
import {AppRoute} from '../../const/const.ts';
import {calculateRating} from '../../utils/utils.ts';


export function OfferCard({offer, onMouseHover}: OfferCardProps): JSX.Element {
  const {id, title, rating, price, type, previewImage, isPremium} = offer;


  return (
    <article className="cities__card place-card" onMouseEnter={onMouseHover}>
      {
        isPremium ?
          (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          ) : ''
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, {id})}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calculateRating(rating as number)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id})}> {title} </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
