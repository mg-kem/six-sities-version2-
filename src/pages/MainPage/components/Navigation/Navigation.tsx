import {cities} from '../../../../const/const.ts';

export function Navigation(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => (
              <li key={city.name} className="locations__item">
                <a className={`locations__item-link tabs__item  ${city.active ? 'tabs__item--active' : ''}`} href="#">
                  <span>{city.name}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
