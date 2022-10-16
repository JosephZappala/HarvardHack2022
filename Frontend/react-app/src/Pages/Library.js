import {React, useState, useEffect, Fragment} from 'react';
import styles from './Pages.module.css';
import LibraryItem from './LibraryItem';

function Library() {
 let [results, setResults] = useState(null)

  useEffect(() => {
    const requestOptions = {
      
    }
    fetch("/api/library", {
      headers:{
        "accepts":"application/json",
        "name": sessionStorage.getItem("user")
      }
      
    })
    .then(response => response.json())
    .then(data => setResults(data.message))
  },[])
    
  return (
    <div >
      <h1>My Library</h1>
      <div>
      {results === null ? (<p>Loading...</p>):(
        results.length === 0 ? (<p>You have nothing in your library</p>): (
      
        results.map((key) => 
            <LibraryItem albumName={key[1]} uri={key[0]} link={key[5]} albumImg={key[4]} />
        ))
        )}
    </div>

    </div>
  );
}
  
export default Library;