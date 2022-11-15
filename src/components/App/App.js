import React, { useState, useEffect } from 'react';
import cleanData from '../../utils.js'
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
const [urls, setUrls] = useState([])

const fetchData = async () => {
  const fetchedUrls = await getUrls()
  const cleanedData = cleanData(fetchedUrls)
  setUrls(cleanedData)
}

useEffect(() => {
  fetchData()
  }, [])

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm fetchData={fetchData} setUrls={setUrls} urls={urls} />
      </header>
      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
