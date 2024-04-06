import React from 'react'
import {Button} from'@mui/material'
import './SearchPage.css'
import SearchResults from './SearchResults'


const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className='searchPage_info'>
              
              <p>62 stays . 26 august to 30 august . 2 guest</p>
              <h1>Stay nearby</h1>

              <Button variant='outlined'>Cancellation Flexibility</Button>
              <Button variant='outlined'>Type of place</Button>
              <Button variant='outlined'>Price</Button>
              <Button variant='outlined'>Rooms and beds</Button>
              <Button variant='outlined'>More filters</Button>

        </div>
        <SearchResults
        img = 'htps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
        location = 'Private room in central London'
        tittle = 'Stay at this special Edwardian House'
        description = '1 guest . 1 bed .1.5 shared bathroom'
        star = {4.3}
        price = '$10 / night'
        total = '$117 Total'/>
    </div>
  )
}

export default SearchPage