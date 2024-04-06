import React from 'react'
import {useDispatch ,useSelector,UseSelector} from 'react-redux'
import "./Header.css"

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {openModal} from '../../Action/ModalAction'
import LogIn from '../LogIn'


const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin


  const openModalHandler = () => {
    console.log('Logged in clicked');
    dispatch(openModal("OPEN_MODAL",<LogIn/>));
  }
  return (
    <div className='header'>
        
        <img src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
        className='header_logo'
        alt='logo'/>
        
        
        <div className='header_center'>
            <input type='text'/>
            <SearchIcon/>


        </div>

        <div className='header_right'>
           
        <p>Become a Host</p>
        <LanguageIcon/>
        <div className='dropDown'>
        <ExpandMoreIcon className='dropbtn'/>
         <div className='dropDown-content'>

          {userInfo ?
            (<>
            <span>Account</span>
            <span>Log Out</span>
            </>)
             : 
            (<>
            <span>Sign up</span>
            <span onClick={openModalHandler}>Log In</span>
            </>)
            }
            <span>Help</span>
         </div>
        </div>
        
        
        <AccountCircleIcon/>

        </div>
     </div>
  )
}

export default Header