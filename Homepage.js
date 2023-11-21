import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  var [userage, setUserage] = useState("");
  var [userdob, setUserdob] = useState("");
  var [usergender, setUsergender] = useState("");
  var [usermobile, setUsermobile] = useState("");

  function savedata() {
    if (userage === '' || userdob === '' || usergender === '' || usermobile === '') {
      alert('Please fill in all details.');
      return;
    }
    const data = {
      userage: userage,
      userdob: userdob,
      usergender: usergender,
      usermobile: usermobile,
    };
    fetch("http://localhost:3002/profileupdated", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
    alert("Your Profile Updated !");
  }

  function deletedata() {
    navigate("/");
  }
  return (
    <div>
      <div className="header" id="header">
      <i class="fa-solid fa-user"></i>
        <h1 className="profile-heading">Update Your Profile</h1>

        <div className="container">
          <form className="form">
            <input
              type="number"
              placeholder="Age"
              value={userage}
              onChange={(e) => setUserage(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={userdob}
              onChange={(e) => setUserdob(e.target.value)}
            />
            <select
              type="text"
              value={usergender}
              onChange={(e) => setUsergender(e.target.value)}>
              <option>Select Your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <input
              type="number"
              placeholder="Mobile Number"
              value={usermobile}
              onChange={(e) => setUsermobile(e.target.value)}
            />
            <input type="button" value="update" onClick={savedata} />
            <input
              type="button"
              id="danger"
              value="Log Out"
              onClick={deletedata}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
