import React from "react";
import { Link } from "react-router-dom";
import "./StyledComponents/MyCSS.css";

function SignupTree() {
  return (
    <div className="authFormSignupTree">
      <button className="login">
        <Link to="/signupclient" class="Links">
        💇 Sign Up As A Client 💇
        </Link>
      </button>
      <p>-- or --</p>
      <button className="login">
        <Link to="/signupstylist" class="Links">
        💈 Sign Up As A Stylist 💈
        </Link>
      </button>
    </div>
  );
}

export default SignupTree;
