import {NavigationProps} from './Navigation.types.ts';

export function Navigation({cities, activeCity, onChangeCity}: NavigationProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => (
              <li key={city} onClick={() => onChangeCity(city)} className="locations__item">
                <a
                  className={`locations__item-link tabs__item  ${city === activeCity ? 'tabs__item--active' : ''}`}
                  href="#"
                >
                  <span>{city}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
