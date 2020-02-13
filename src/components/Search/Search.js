import React from 'react';
import './Search.css';

const Search = ({onInputChange,onButtonSubmit}) => {
        return (
            <div className="tc search-box">
                <h2>iTunes api example</h2>
                <div className="search-form">
                    <input 
                        className="search-input" 
                        type="text"
                        placeholder="Search songs.."
                        onChange={onInputChange}
                    />
                    <button 
                        className="btn-search"
                        onClick={onButtonSubmit}
                    >search</button>
                </div>
                <p>Search by song title, author, song number, lyrics, catalog or copyright owner</p>
            </div>
        );
}

export default Search;


