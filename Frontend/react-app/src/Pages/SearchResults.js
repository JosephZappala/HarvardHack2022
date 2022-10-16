import {React, useState, useEffect, useSearchParams} from 'react';
import styles from './Pages.module.css';
import SearchResultItem from './SearchResultItem';

function SearchResult(props) {
  let [results, setResults] = useState(null)
  useEffect(() => {
    fetch("/api/search", {
      headers:{
        "accepts":"application/json",
        "query": window.location.pathname.split('/')[2]
      }
    })
    .then(response => response.json())
    .then(data => setResults(data.message))
  },[props.search])
    
  return (
    <div  >
      
      {results === null ? (<p>Nothing found in that search</p>):(
      
      results.map((key) => 
      <SearchResultItem artist={key['artist']} uri={key['uri']} albumName={key['title']} link={key['link']} albumImg={key['artwork']} />
      )
      
    )}
      
      

    

    </div>
  );
}
  
export default SearchResult;