import { Link } from 'react-router-dom';
import './ErrorPage.style.css';
import { Helmet } from 'react-helmet-async';

export function ErrorPage(): JSX.Element {
  return (
    <div className='error-page__wrapper'>
      <Helmet>
        <title>Error Page</title>
      </Helmet>
      <h1>Error 404</h1>
      <h4>Page not found</h4>
      < Link to='/'><span>Go to main page</span></Link>
    </div>
  );
}
