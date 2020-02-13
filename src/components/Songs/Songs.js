import React from 'react';
import Song from '../Song-Card/Song-Card.js';
import './Songs.css'

const Songs = (props) => {
    let songs = props.songs.results;
    let count = "";
    let firstSong = props.start;
    let lastSong = props.end;
    let buttons = "hidden";

    if (songs) {
        buttons = "visible";
        songs = songs.slice(firstSong, lastSong);
        songs = songs.map(song => <Song key={song.trackId} info={song} />);
        
    if(props.songs.results.length > 0 ) {
        count = `Found ${props.songs.results.length} songs`;
        buttons = "visible";
    } else {
        count = `Sorry, no matches found`;
        buttons ="hidden";
    }
}

    return (
        <div className="found">
            <p>{count}</p>
            <div className="searchinfo">{songs}</div>
                <div className="btn-next-prev">
                    <button 
                        onClick={props.handlePrevPage}
                        style={{visibility: buttons}}
                        >{`<<prev`}</button>
                    <button 
                        onClick={props.handleNextPage}
                        style={{visibility: buttons}}
                        >{`next>>`}</button>
                </div>
        </div>
    );
}

export default Songs;