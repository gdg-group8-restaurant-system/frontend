import { NavLink } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="container mx-auto px-4 py-12 ">  
           This is the login page. You can implement your login form here. <br />
           Don't have an account?<NavLink to="/user/register" className="text-blue-500 hover:underline">
                 Register here.
            </NavLink>
        </div>
    )
} 