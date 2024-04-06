import React, { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from "react-date-range"
// import PeopleIcon from "@mui/material"
import {Button} from "@mui/material"


import './Search.css'

const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate:endDate,
        key: "selection"
    }

    const handleSelection = (ranges) =>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

  return (
    <div className='search'>
        <DateRangePicker ranges ={[selectionRange]} onChange={handleSelection}/>
         <h2>Number of Guest 
          {/* <PeopleIcon/> */}
          </h2>

         <input min={0} defaultValue={2} type='number'/>
         <Button>Search AirBnB</Button>
    </div>
  )
}

export default Search