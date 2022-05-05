import "./user.css";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://media.istockphoto.com/photos/young-pretty-afro-woman-feeling-happy-proud-and-hopeful-wondering-or-picture-id1290179989?k=20&m=1290179989&s=612x612&w=0&h=oQgLnTfj1VZ9NHMNmsEJSi4ujpGf6DHQ5qLDV01iNrQ=" alt="" 
                    className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span> 
                    </div>
                </div>
                <div className="userShowBottom"></div>
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">annabeck@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
        </div>
            <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label> Username</label>
                        <input 
                            type="text" 
                            placeholder="annabeck99" 
                            className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label> Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Anna Becker" 
                            className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label> Email</label>
                        <input 
                            type="text" 
                            placeholder="annabeck99@gmail.com" 
                            className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label> Phone</label>
                        <input 
                            type="text" 
                            placeholder="+1 123 456 67" 
                            className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label> Address</label>
                        <input 
                            type="text" 
                            placeholder="New York | USA" 
                            className="userUpdateInput" />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://media.istockphoto.com/photos/young-african-american-woman-with-afro-hair-wearing-casual-sweater-picture-id1205341221?k=20&m=1205341221&s=612x612&w=0&h=FPct0i5kc84CUntLOPj_qgExzo_fAQei48-Smgr4OyA=" alt=""
                         className="userUpdateImg" />
                         <label htmlFor="file">
                             <Publish/>
                             </label>
                         <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
