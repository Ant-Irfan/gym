import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { notification } from 'antd';
import Logo from '../../assets/logo.png'
import history from '../../history';

const Navbar = () => {

  const [isActive, setisActive] = useState(false)
  const [isActiveMembers, setisActiveMembers] = useState(false)
  const [isActiveCategory, setisActiveCategory] = useState(false)

  const logout = () => {
    localStorage.removeItem("token")
    notification.success({
      message:"Uspjesno ste se izlogovali!"
    })
    history.push("/login")
  }
  return (
    <header>
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <NavLink 
              isActive={(match, location)=>{
                if(match){
                    setisActive(true);
                }
                return match;
             }} 
              to="/pocetna" className="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isActive ? '#ffc170' : 'currentColor'} className="bi d-block mx-auto mb-1 bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
                Pocetna
              </NavLink>
            </li>
            <li>
              <NavLink to="/clanovi" className="nav-link text-white" 
              isActiveMembers={(match, location)=>{
                if(match){
                    setisActiveMembers(true);
                }
                return match;
             }} 
              >
                 <svg
                className="bi d-block mx-auto mb-1 bi bi-person-circle" width="24" height="24"
                xmlns="http://www.w3.org/2000/svg" fill={isActiveMembers ? '#ffc170' : 'currentColor'} viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                Clanovi
              </NavLink>
            </li>
            <li>
              <NavLink 
              isActiveCategory={(match, location)=>{
                if(match){
                    setisActiveCategory(true);
                }
                return match;
             }} 
              to="/kategorije" className="nav-link text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isActiveCategory ? '#ffc170' : 'currentColor'} className="bi d-block mx-auto mb-1 bi-grid" viewBox="0 0 16 16">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                </svg>
                Kategorije
              </NavLink>
            </li>
            <li
            onClick={() => logout()}
            style={{cursor:"pointer"}}
            className="nav-link text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi d-block mx-auto bi-door-open mb-1" viewBox="0 0 16 16">
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
            </svg>
                Odjava
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar