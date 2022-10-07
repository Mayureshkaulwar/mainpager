import React from 'react';
import SideBar from "./Sidebar";

//UI design about page
export default function Navbar(){
    const [isShown,setIsShown] = React.useState(true);
   
   const handleClick = () =>{
       setIsShown(current=>!current)
       console.log(`Function in about clicked`)
   }
   
       return (
           <div className="about">
               {/* Navbar */}
                
               <div className="navbar">
                   {/* main website logo */}
                   <img src="./images/website-logo.png" alt="website logo" className="website-logo" />
                   {/* navbar options */}
                   
               <ul className="navbar-options">
                   <li className="opts"><a href="./try.js"  className="a">About Home</a></li>
                   <li className="opts"><a href="./about.js"  className="a">About</a></li>
                   <li className="opts"><a href="./"  className="a">Car List</a></li>
                   <li className="opts"><a href=""  className="a">Blog</a></li>
                   <li className="opts" ><a href="" className="a">Contact Us</a></li>
           </ul>
           
                   <img src="./images/menu.png" alt="menu" className="sidebar-menulogo" onClick={handleClick}/>
                  
               </div>
                   {
                       !isShown && <SideBar/>
                   }
        </div>
  )
}



