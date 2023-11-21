import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Newaccount() {
  const navigate = useNavigate()
  var [username, setUsername] = useState("");
  var [useremail, setUseremail] = useState("");
  var [userpassword, setPassword] = useState("");
  var [usercpassword, setUserCpassword] = useState("");





  function savedata() {
    if(username === '' || useremail === '' || userpassword === '' || usercpassword === ''){
      alert("Please fill the form")
      return;
    }
    else
    if(userpassword === usercpassword ){
      const data = {
        username: username,
        useremail: useremail,
        userpassword: userpassword,
        usercpassword: usercpassword,
      };

     fetch("http://localhost:3002/savedata", {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      alert("Your Account Created")
      navigate('/signinpage')
      
    }
    else{
      var one = document.querySelector(".one")
      one.style.borderColor="red"

      alert("Check Your Password")
    }


  }
  function remember() {
    navigate("signinpage");
  }
  return (
    <div>
    


      <div className="container">
      <div className="header" id="header">
      <h1 style={{fontSize:"25px"}}>Get Started Here !</h1>
      <div className="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use email or registration</span>
        <form className="form">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            required ='true'
            placeholder="Email"
            value={useremail}
            onChange={(e)=> setUseremail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={userpassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
          className="one"
            type="password"
            placeholder="Confirm Password"
            value={usercpassword}
            onChange={(e) => setUserCpassword(e.target.value)}
          />
          <input type="button" value="Sign up" onClick={savedata} />

          <div className="remember-forgot">
           <a href="#" onClick={remember}>Already Signed In?</a>
          </div>
        </form>
        </div>
        </div>
      </div>
  );
}

export default Newaccount;
