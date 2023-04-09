import {useState} from 'react';


function SearchParams () {
    const [location,setLocation] =useState ("Seattle, WA");

    function onLocationChanged(e) {
        const value = e.target.value;
        console.log(`location value : ${value}`);
        setLocation(value)
    }
    return (
      <div className="search-params">
        
        <form>
          <label htmlFor="location">
            Location
            <input onChange={onLocationChanged} id="location" value={location} placeholder="Location" />
          </label>
          <button type="button">Submit</button>
        </form>
      </div>
    );
  };
  
  export default SearchParams;