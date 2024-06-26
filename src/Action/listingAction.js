import {LISTING_LIST_FAIL,LISTING_LIST_REQUEST,LISTING_LIST_SUCCESS} from '../Types/listingTypes'
import axios from 'axios'


export const listlisting = () => async (dispatch) => {
    try{
         dispatch({type: LISTING_LIST_REQUEST});
         const {data} = await axios.get("https://ns-air-bnb-bckend.onrender.com/listing");

         dispatch({type: LISTING_LIST_SUCCESS, payload: data});

    }catch(error){

         dispatch({type: LISTING_LIST_FAIL, payload: error});
    }  
}