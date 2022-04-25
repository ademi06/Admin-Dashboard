import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@mui/icons-material';


export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topleft">
                <span className='logo'>Ademi-admin</span>

            </div>
                
            <div className="topright">
                <div className="topbarIconContainer">
                  <NotificationsNone /> 
                  <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                  <Language /> 
                </div>
                <div className="topbarIconContainer">
                  <Settings />
                </div>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='BoyIcon' className='topAvatar'/>
            </div>
        </div>   
    </div>
  );
}