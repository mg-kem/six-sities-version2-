import { mockOffers } from '../mock/mock';
import { MainPage } from '../pages/MainPage';

export function App(): JSX.Element {
  return (
    <MainPage offers={mockOffers} />
  );
}


