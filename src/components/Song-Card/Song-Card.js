import React from 'react';
import './Song-Card.css'

const Song = ( props ) => {
    const info = props.info;
    return (
        <div className="songs-box">
            <img src={info.artworkUrl100} alt="song" />
                <div className="song-info">
                    <p>{info.trackName}</p>
                    <hr/>
                    <p>{'By '+info.artistName}</p>
                </div>
        </div>
    );
}

export default Song;