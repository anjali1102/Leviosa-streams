import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUpUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ firstName, lastName, email, password, navigate }));

  };

  return (
    <div className="main-signup">
      <div className="center">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
            <label>First Name</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              onChange={(event) => setLastName(event.target.value)}
              required
            />
            <label>Last Name</label>
          </div>
          <div className="txt_field">
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label>Email Address</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button className="btn btn-success" type="submit" value="Register">
            Create New Account
          </button>
          <div className="signup_link">
            Already have a account |
            <Link to="/login">
              <b>Login</b>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export { SignUp };
