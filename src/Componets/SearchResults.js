import React from 'react'
import './SearchResults.css'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SearchResults = ({img, location,tittle,description,price,total,star}) => {
  return (
    <div className='searchResults'>
        <img src={img} alt=''/>
        <FavoriteBorderIcon className='searchResults_heart'/>
       

       <div className='searchResults_info'>
           
          <div className='searchResults_infoTop'>
                <p>{location}</p>
                <h3>{tittle}</h3>
                <p>----</p>
                <p>{description}</p>

          </div>

          <div className='searchResults_infoBottom'>

               <div className='searchResults_stars'>

                   <p><stron>{star}</stron></p>
              </div>

              <div className='searchResults_price'>

                   <h2>{price}</h2>
                   <p>{total}</p>
              </div>

          </div>

       </div>

    </div>
  )
}

export default SearchResults