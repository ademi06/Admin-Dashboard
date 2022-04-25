import './sidebar.css'
import {LineStyle, Timeline, TrendingUp} from '@mui/icons-material';
import {PersonOutline, Inventory2Outlined, AttachMoney, Equalizer,
  MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline
} from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>DashBoard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems active">
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className="sidebarListItems">
              <Timeline className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUp className='sidebarIcon'/>
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems ">
              <PersonOutline className='sidebarIcon' />
              Users
            </li>
            <li className="sidebarListItems">
              <Inventory2Outlined className='sidebarIcon'/>
              Products
            </li>
            <li className="sidebarListItems">
              <AttachMoney className='sidebarIcon'/>
              Transactions
            </li>
            <li className="sidebarListItems">
              <Equalizer className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems ">
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className="sidebarListItems">
              <DynamicFeed className='sidebarIcon'/>
              Feedback
            </li>
            <li className="sidebarListItems">
              <ChatBubbleOutline className='sidebarIcon'/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems ">
              <WorkOutline className='sidebarIcon' />
              Manage
            </li>
            <li className="sidebarListItems">
              <TrendingUp className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItems">
              <Equalizer className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
