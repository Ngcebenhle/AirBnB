import React, { useEffect } from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";

import { useDispatch, useSelector } from "react-redux";
import { listlisting } from "../Action/listingAction";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listing } = listingList;

  useEffect(() => {
    dispatch(listlisting());
  }, [dispatch]);
  return (
    <div className="home">
      <Banner />

      {loading ? (
        <h2>loading ...Ok</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listing.map((listing) => (
            <Card
            key={listing.id}
              src={listing.image}
              tittle={listing.tittle}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}

      {/* <div className='hone_section'>
          <Card 
          src = "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414abiba-14e8860d59b3.jpg?im_w=7"
          tittle = "Online Experiences"
          description="Unique activities we can do together, led by a world of host"/>

        </div>} */}
    </div>
  );
};

export default Home;
