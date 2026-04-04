import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      This is the register page. You can implement your registration form here.
      <br />
      Already have an account? <NavLink to="/user/login" className="text-blue-500 hover:underline">Login here.</NavLink>
    </div>
  );
}
