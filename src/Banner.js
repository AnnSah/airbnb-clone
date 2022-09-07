import React, { useState } from 'react'
import "./Banner.css"
import "@mui/material";
import Button from '@mui/material/Button';
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory();

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" >{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a diffrent kind get-away to uncover the hidden gems near your!</h5>

                <Button onClick={() => history.push("/search")}> Explore Nearby</Button>
            </div>
        </div> 
    )
}

export default Banner;