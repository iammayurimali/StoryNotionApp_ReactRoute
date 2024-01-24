import { useState } from "react"
import toast from "react-hot-toast"
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom"

export default function LoginForm({setIsLoggedIn}) {

    const naviagte = useNavigate();
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const [showPassword, setShowPassword] = useState(false)


    function changeHandler(e) {
        setFormData((preState) => {
            return {
                ...preState,
                [e.target.name]: e.target.value
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in")
        naviagte("/dashboard")
    }

    return (<form onSubmit={submitHandler}>
        <label>
            <p>Email Address
                <sup>*</sup>
            </p>
            <input
                required
                type="email"
                value={formData.email}
                placeholder="Enter email id"
                name="email" onChange={changeHandler}></input>
        </label>

        <label>
            <p>Password
                <sup>*</sup>
            </p>
            <input
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                placeholder="Enter password"
                name="password" onChange={changeHandler}></input>
            <span onClick={()=> setShowPassword((prevState => !prevState))}>
                {showPassword? (<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye/>)}
            </span>

            <Link to = "#"> 
            <p>Forgot Password</p>
            </Link>

        </label>
            <button>Sign In</button>

    </form>)
}