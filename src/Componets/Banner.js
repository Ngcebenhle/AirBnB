import React, { useState } from "react";

import "./Banner.css";

// import button from '@mui/icons-material/Button';
import Search from "./Search";
import { Button } from "@mui/material";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>

        <div className="banner_info">
          <h1>Get out and streatch your imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden germs near
            you.
          </h5>

          <button variant="outlined">Explore Nearby</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
