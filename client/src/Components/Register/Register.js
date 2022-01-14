import React, { useState } from "react";
import "./register.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [modalIsOpen2, setmodalIsOpen2] = useState(false);
  return (
    <div>
      <>
        <div class="main1">
          <div class="left1">
            <img
              class="image"
              src="https://newcastlebeach.org/images/white-twitter-icon-6.png"
              alt=""
            />
          </div>
          <div class="right1">
            <img
              class="logo"
              width="20%"
              src="https://th.bing.com/th/id/R.048de335ff9de3bac56b8dcbdfb561d7?rik=GRbAwDsT9Y2HXA&pid=ImgRaw&r=0"
              alt=""
            />
            <h1>Happening now</h1>
            <div class="right-div">
              <h2>Join Twitter Today</h2>
              <button class="btn1" onClick={() => setmodalIsOpen(true)}>
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
                    class="logo"
                    width="10%"
                    src="https://th.bing.com/th/id/R.048de335ff9de3bac56b8dcbdfb561d7?rik=GRbAwDsT9Y2HXA&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div class="content">
                  <h2>Create your account</h2>
                  <div class="inp">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div class="inp">
                    <input type="text" placeholder="Email" />
                  </div>
                  <h3>Date of birth</h3>
                  <p>
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </p>
                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <select name="day">
                      <option value="">day</option>
                      <option value="">day</option>
                      <option value="">day</option>
                      <option value="">day</option>
                    </select>
                    <select name="month">
                      <option value="">Month</option>
                      <option value="">Month</option>
                      <option value="">Month</option>
                      <option value="">Month</option>
                    </select>
                    <select name="year">
                      <option value="">Year</option>
                      <option value="">Year</option>
                      <option value="">Year</option>
                      <option value="">Year</option>
                    </select>
                  </div>
                  <div class="inp">
                    <input type="submit" value="Sign Up" class="btn" />
                  </div>
                </div>
                <a onClick={() => setmodalIsOpen(false)} className="close">
                  X
                </a>
              </Modal>
              <br />
              <button class="btn22" onClick={() => setmodalIsOpen2(true)}>
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
                    class="logo"
                    width="10%"
                    src="https://th.bing.com/th/id/R.048de335ff9de3bac56b8dcbdfb561d7?rik=GRbAwDsT9Y2HXA&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div class="content">
                  <h2>Sign in to Twitter</h2>
                  <div class="inp">
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div class="inp">
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div class="inp">
                    <input type="submit" value="Log In" class="btn" />
                  </div>
                  <h3>
                    Don't have an account? <span>Sign up</span>
                  </h3>
                </div>
                <a class="close" onClick={() => setmodalIsOpen2(false)}>
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
