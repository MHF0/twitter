import React, { useState } from "react";
import "./register.css";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");
export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  let [birthday, setBirthday] = useState("");

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [modalIsOpen2, setmodalIsOpen2] = useState(false);

  const handelSingUp = async () => {
    birthday = `${day}-${month}-${year}`;
    setBirthday(birthday);

    await axios
      .post(`http://localhost:5000/api/users`, {
        username,
        email,
        birthday,
        password,
      })
      .then((result) => {
        toast.success(result.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handelSigIn = async () => {
    await axios
      .post(`http://localhost:5000/api/login`, {
        email,
        password,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        toast.success(result.data.message);
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <div>
      <>
        <div className="main1">
          <div className="left1">
            <img
              className="image"
              src="https://newcastlebeach.org/images/white-twitter-icon-6.png"
              alt=""
            />
          </div>
          <div className="right1">
            <img
              className="logo"
              width="20%"
              src="https://th.bing.com/th/id/R.048de335ff9de3bac56b8dcbdfb561d7?rik=GRbAwDsT9Y2HXA&pid=ImgRaw&r=0"
              alt=""
            />
            <h1>Happening now</h1>
            <div className="right-div">
              <h2>Join Twitter Today</h2>
              <button className="btn1" onClick={() => setmodalIsOpen(true)}>
                Sign Up
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setmodalIsOpen(false)}
                style={{
                  overlay: {
                    // backgroundColor:'transparent',
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  content: {
                    position: "absolute",
                    top: "100px",
                    left: "300px",
                    right: "300px",
                    bottom: "40px",
                  },
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <img
                    style={{ textAlign: "center" }}
                    className="logo"
                    width="10%"
                    src="https://th.bing.com/th/id/R.048de335ff9de3bac56b8dcbdfb561d7?rik=GRbAwDsT9Y2HXA&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h2>Create your account</h2>
                  <div className="inp">
                    <input
                      type="text"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="inp">
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="inp">
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <h3>Date of birth</h3>
                  <p>
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </p>
                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <select
                      name="day"
                      onChange={(e) => setDay(e.target.value)}
                      value={day}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                    <select
                      name="month"
                      onChange={(e) => setMonth(e.target.value)}
                      value={month}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    <select
                      name="year"
                      onChange={(e) => setYear(e.target.value)}
                      value={year}
                    >
                      <option value="2001">2001</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                    </select>
                  </div>
                  <div className="inp">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn"
                      onClick={handelSingUp}
                    />
                  </div>
                </div>
                <a onClick={() => setmodalIsOpen(false)} className="close">
                  X
                </a>
              </Modal>
              <br />
              <button className="btn22" onClick={() => setmodalIsOpen2(true)}>
                Log In
              </button>
              <p>
                <small>
                  By signing up, you agree to the <span>Terms</span> of{" "}
                  <span> Service</span> and <span>Privacy Policy</span>,
                  including <span>Cookie </span> Use.
                </small>
              </p>
              <Modal
                isOpen={modalIsOpen2}
                style={{
                  content: {
                    position: "absolute",
                    top: "100px",
                    left: "300px",
                    right: "300px",
                    bottom: "40px",
                  },
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <img
                    style={{ textAlign: "center" }}
                    className="logo"
                    width="10%"
                    src="https://th.bing.com/th/id/R.048de335ff9de3bac56b8dcbdfb561d7?rik=GRbAwDsT9Y2HXA&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h2>Sign in to Twitter</h2>
                  <div className="inp">
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="inp">
                    <input
                      type="Password"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="inp">
                    <input
                      type="submit"
                      value="Log In"
                      className="btn"
                      onClick={handelSigIn}
                    />
                  </div>
                  <h3>
                    Don't have an account? <span>Sign up</span>
                  </h3>
                </div>
                <a className="close" onClick={() => setmodalIsOpen2(false)}>
                  X
                </a>
              </Modal>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
