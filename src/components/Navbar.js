import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg'
import { useState } from "react";
import toast from "react-hot-toast";

export default function Navbar(props){

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    
    return(<div className="flex justify-evenly">
        <Link to = "/">
            <img src = {Logo} alt = "logo" width={160} height={32} loading="lazy"></img>
        </Link>
        <nav>
            <ul className="flex gap-3">
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/">About</Link>
                </li>
                <li>
                    <Link to = "/">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className="flex ml-5 mr-3 gap-3">
            { !isLoggedIn &&
                <Link to = "/login">
                    <button>Login</button>
                </Link>
                
            }
            { !isLoggedIn &&
                 <Link to = "/signup">
                 <button>Sign up</button>
             </Link>
            }
            { isLoggedIn &&
                 <Link to = "/">
                 <button onClick={()=>{
                    setIsLoggedIn(false)
                    toast.success("Logged out")
                 }}>Log out</button>
             </Link>
            }
            { isLoggedIn &&
                 <Link to = "/login">
                 <button>Dashboard</button>
             </Link>
            }
        </div>
    </div>)

}