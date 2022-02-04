import React, { useState, useEffect } from "react";
import "../Home/home.css";
import { GoSearch } from "react-icons/go";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RightSide() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    await axios
      .get(`http://localhost:5000/api/getAllUser`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setUsers(result.data.result);
      })
      .catch((err) => {
        //
      });
  };

  return (
    <div className="right">
      <div className="friends">
        <div className="search-box">
          <GoSearch /> <input type="search" placeholder="Search Twitter" />
        </div>

        <div className="friend">
          <h3 className="fri-name">Trends for you</h3>
          <hr
            style={{
              backgroundColor: "rgb(197, 195, 195)",
              width: " 100%",
              height: "1px",
            }}
          />
          <div style={{ margin: "10px 0", padding: " 0 10px" }}>
            <p
              style={{
                color: "#999",
                fontWeight: "800",
                fontSize: "18px",
              }}
            >
              Trending Worldwild
            </p>
            <p
              style={{
                color: "black",
                fontWeight: "800",
                fontSize: "18px",
              }}
            >
              #BreakingNews
            </p>
          </div>
          <div className="info1">
            <div className="handle">
              <h4>Selene Richard</h4>
              <p className="text">Lorem ipsum dolor sit ipsum dolor sit</p>
            </div>
            <img
              src="https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324-300x300.png"
              alt=""
              className="profile1"
            />
          </div>
          <p
            style={{
              margin: "5px 0 10px 0",
              padding: "0 3%",
              color: "#999",
            }}
          >
            10.070 people are tweeting about this
          </p>
          <hr
            style={{
              backgroundColor: "rgb(197, 195, 195)",
              width: "100%",
              height: "1px",
              marginBottom: "20px",
            }}
          />

          <div className="info1">
            <div className="handle">
              <h4>Selene Richard</h4>
              <p className="text">Lorem ipsum dolor sit ipsum dolor sit</p>
            </div>
            <img
              src="https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324-300x300.png"
              alt=""
              className="profile1"
            />
          </div>

          <p
            style={{
              margin: "5px 0 10px 0",
              padding: "0 3%",
              color: "#999",
            }}
          >
            10.070 people are tweeting about this
          </p>
          <hr
            style={{
              backgroundColor: "rgb(197, 195, 195)",
              width: "100%",
              height: "1px",
              marginBottom: "20px",
            }}
          />

          <div className="info1">
            <div className="handle">
              <h4>Selene Richard</h4>
              <p className="text">Lorem ipsum dolor sit ipsum dolor sit</p>
            </div>
            <img sr alt="" className="profile1" />
          </div>
          <p
            style={{
              margin: "5px 0 10px 0",
              padding: "0 3%",
              color: "#999",
            }}
          >
            10.070 people are tweeting about this
          </p>
          <hr
            style={{
              backgroundColor: "rgb(197, 195, 195)",
              width: "100%",
              height: "1px",
              marginBottom: "20px",
            }}
          />
        </div>

        <div className="friends">
          <div className="friend">
            <h3 className="fri-name">Who to follow</h3>
            {users &&
              users.map((user, index) => {
                return (
                  <div className="info" key={index}>
                    <img
                      src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="profile"
                    />

                    <div className="handle">
                      <Link to={`/profile/${user._id}`}>
                        <h4>{user.username}</h4>
                      </Link>
                      <p className="text">{user.email}</p>
                    </div>
                    <input type="submit" value="Follow" className="btn33" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
