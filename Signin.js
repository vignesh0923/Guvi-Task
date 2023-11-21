import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  var [newdata, setNewdata] = useState("");
  var [useremail, setUseremail] = useState("");
  var [userpassword, setPassword] = useState("");

  fetch("http://localhost:3002/senddata")
    .then(
      function (res) {
        return res.json();
      },
      function (req) {
        console.log("Reject");
      }
    )
    .then(function (res) {
      setNewdata(res);
    });

  function savedata() {
    newdata.map(function (e) {
      if (useremail === e.useremail && userpassword === e.userpassword) {
        console.log("success");
        navigate("/profilepage");
      } else {
        console.log("failed");
        var two = document.querySelector(".two");
        two.style.borderColor = "red";
      }
    });
  }
  return (
    <div>
      <div className="header" id="header">
        <div className="container">
          <h1>Welcome Back !</h1>
          <div className="social-container">
            <a href="#" class="social">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <form className="form">
            <input
              type="email"
              placeholder="Email"
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
            />
            <input
              className="two"
              type="password"
              placeholder="Password"
              value={userpassword}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Forgot Your Password ?</span>
            <input type="button" value="Signi in" onClick={savedata} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
