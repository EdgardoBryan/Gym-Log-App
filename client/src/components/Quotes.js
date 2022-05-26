import React, { useState, useEffect } from 'react';
import QuoteTile from './QuoteTile';


const Quotes = (props) => {
  const [quoteData,setQuotes]=useState([])
  const getQuotes = async () => {
    try {
      const response = await fetch("/api/v1/ZenQuotes");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      console.log(responseBody)
      setQuotes(responseBody);
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const quoteListItems = quoteData.map((quote) => {
    return <QuoteTile key={`${quote.c} ${quote.q}`} quote={quote} id={quote.c} />;
  });

  return(
    <div className="container">
      <h1 className="quotes">List Of Quotes</h1>
      {quoteListItems}
    </div>
  );
};

export default Quotes;
