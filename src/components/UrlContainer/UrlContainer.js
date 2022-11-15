import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({ urls }) => {
  const urlEls = urls.map(url => {
    return (
      <div 
        className="url"
        key={urls.id}
      >
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  })

  const urlEl = urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> 

  return (
    <section>
      {urlEl}
    </section>
  )
}

export default UrlContainer;
