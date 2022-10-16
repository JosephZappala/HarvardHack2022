import {React, useState, useEffect} from 'react';
import styles from './Pages.module.css';
import SearchResultItem from './SearchResultItem';

function SearchResult(props) {
  let [results, setResults] = useState(null)

  useEffect(() => {
    fetch("/api/search", {
      headers:{
        "accepts":"application/json",
        "query": props.search
      }
    })
    .then(response => response.json())
    .then(data => setResults(data.message))
  },[props.search])
    
  return (
    <div  >
      
      {results === null ? (<p>Nothing found in that search</p>):(
      
      results.map((key) => 
      <SearchResultItem artist={key[2]} uri={key[0]} albumName={key[1]} link={key[4]} albumImg={key[5]} />
      )
      
    )}
      
      

    

    </div>
  );
}
  
export default SearchResult;