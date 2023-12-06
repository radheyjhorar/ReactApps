import './ErrorPage.css';
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div id='error-page'>
        <div>
          <h1 className='error-status'>Oops! {error.status}</h1>
          <br />
          <p className='error-name'>
            {error.data || <p>Sorry, an unexpected error has occurred.</p>}
          </p>
        </div>
      </div>
    </>
  )
}

export default ErrorPage;