import React from 'react';
import error from '../static/logos/undraw_page_not_found_su7k.svg'
import '../styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound-logo">
        <img src={error} className="notFound-error" alt="error" />
        <div className="notFound-tittle">PAGE NOT FOUND</div>
      </div>
      <div className="notFound-page">
        <p className="notFound-text">Sorry, but you are looking for something that isn't here.</p>
        <button className="notFound-home">GO HOME</button>
      </div>
    </div>
  )
}

export { NotFound }
