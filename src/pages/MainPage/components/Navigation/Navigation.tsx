import { Cities } from '../../../../const/const';

export function Navigation() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Cities.map((city) => (
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
