import { PlacesCountProps } from './PlacesCount.types';

export function PlacesCount({ count }: PlacesCountProps): JSX.Element {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{count} places to stay in Amsterdam</b>
    </>
  );
}
