import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';

const UrlForm = ({ fetchData }) => {
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    const newUrl = {
      long_url: urlToShorten,
      title: title
    }

    postData(newUrl)
    clearInputs();
  }

  const postData = async (newUrl) => {
    const response = await fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUrl)
    })
    
    fetchData()
  }

  const clearInputs = () => {
    setTitle('')
    setUrlToShorten('')
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='URL to Shorten'
        value={urlToShorten}
        onChange={e => setUrlToShorten(e.target.value)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
