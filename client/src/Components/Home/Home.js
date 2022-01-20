import React, { useState, useEffect } from "react";
import "./home.css";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaShareAlt,
  FaRegComment,
} from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { MdTravelExplore, MdTagFaces } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineFileImage } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { format } from "timeago.js";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { Link, useParams } from "react-router-dom";

Modal.setAppElement("#root");

const Home = () => {
  // const { tweetId } = useParams();
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [tweet, setTweet] = useState([]);

  const [commentTweet, setCommentTweet] = useState("");
  const [comment, setComment] = useState([]);

  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [modalIsOpen2, setmodalIsOpen2] = useState(false);

  const token = localStorage.getItem("token");

  const handelCreateTweet = async (e) => {
    e.preventDefault();
    setDate(Date.now());
    await axios
      .post(
        `http://localhost:5000/api/createTweet`,
        {
          description,
          date,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => {
        toast.success(result.data.message);
        getAllTweet();
      })
      .catch((err) => {
        // toast.error(err.response.data.message);
      });
  };

  const getAllTweet = async () => {
    await axios
      .get(`http://localhost:5000/api/getAllTweets`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setTweet(result.data.result.reverse());
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    getAllTweet();
    // getTweetById();
  }, []);

  const getTweetById = async (tweetId) => {
    console.log(tweetId);
    await axios
      .get(`http://localhost:5000/api/getTweets/${tweetId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setCommentTweet(result.data.result);
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err.response.data.message);
      });
  };

  const handelCreateComment = async (tweetId) => {
    console.log("tweetId", tweetId);
    await axios
      .post(
        `http://localhost:5000/api/createComment/${tweetId}`,
        { comment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        console.log("comment", result.data.result);
        setComment(result.data.result);
      })
      .catch((err) => {
        // toast.error(err.response.data.message);
      });
  };
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="left">
            <div className="side-bar">
              <a className="menue-item">
                <span>
                  <img
                    className="logo"
                    width="30%"
                    src="https://th.bing.com/th/id/R.048de335ff9de3bac56b8dcbdfb561d7?rik=GRbAwDsT9Y2HXA&pid=ImgRaw&r=0"
                    alt=""
                  />
                </span>
              </a>
              <a className="menue-item">
                <span>
                  {" "}
                  <FaHome size={30} className="icon" />
                </span>
                <h3>Home</h3>
              </a>
              <a className="menue-item">
                <span>
                  {" "}
                  <MdTravelExplore size={30} className="icon" />
                </span>
                <h3>Explore</h3>
              </a>
              <a className="menue-item">
                <span>
                  {" "}
                  <IoMdNotificationsOutline size={30} className="icon" />
                </span>
                <h3>Notifications</h3>
              </a>
              <a className="menue-item">
                <span>
                  {" "}
                  <BsEnvelope size={30} className="icon" />
                </span>
                <h3>Message</h3>
              </a>
              <a className="menue-item">
                <span>
                  {" "}
                  <GoSearch size={30} className="icon" />
                </span>
                <h3>Settings</h3>
              </a>
              <a className="menue-item">
                <span>
                  {" "}
                  <GoSearch size={30} className="icon" />
                </span>
                <h3>Settings</h3>
              </a>

              <div className="btn2">
                <button> Tweet</button>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="home">
              <h3>Home</h3>
              <img
                style={{ width: "30px" }}
                src="https://www.glamouratiuk.com/include/thumbnail.asp?sFile=/file-manager/Products/Stencils/star-group-2-left.jpg&iWidth=420&iHeight=420"
                alt=""
              />
            </div>

            <form className="create-post" onSubmit={handelCreateTweet}>
              <div className="post-inp">
                <img
                  src="https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324-300x300.png"
                  alt=""
                  className="profile1"
                />
                <textarea
                  type="text"
                  placeholder="What's happening?"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <hr />
              <div className="icon">
                <div style={{ paddingLeft: "50px" }}>
                  <span>
                    <AiOutlineFileImage
                      size={20}
                      style={{ color: "rgb(29, 155, 240)" }}
                    />{" "}
                  </span>
                  <span>
                    <MdTagFaces
                      size={20}
                      style={{ color: "rgb(29, 155, 240)" }}
                    />{" "}
                  </span>
                  <span>
                    <BiPoll size={20} style={{ color: "rgb(29, 155, 240)" }} />{" "}
                  </span>
                  <span>
                    <FaMapMarkerAlt
                      size={20}
                      style={{ color: "rgb(29, 155, 240)" }}
                    />{" "}
                  </span>
                </div>
                <input type="submit" value="Tweet" className="btn3" />
              </div>
            </form>

            <div className="feeds">
              {tweet &&
                tweet.map((item, index) => (
                  <div className="feed" key={index}>
                    <div className="head">
                      <div className="user">
                        <img
                          src="https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324-300x300.png"
                          alt=""
                          className="profile"
                        />

                        <div className="info">
                          <h3>
                            {" "}
                            <b> {item.userId.username}</b>{" "}
                            <span style={{ color: "#536471" }}>
                              <small>@{item.userId.username}</small>{" "}
                            </span>
                          </h3>
                          <small> {format(item.date)}</small>
                          <br />
                          <p>{item.description} </p>
                        </div>
                      </div>
                      <span className="edit">
                        <GoSearch />
                      </span>
                    </div>

                    <div className="action">
                      <span>
                        <FaHeart style={{ color: "#536471" }} />
                        <small>1</small>{" "}
                      </span>
                      <span>
                        <FaRegComment
                          style={{ color: "#536471" }}
                          onClick={() => {
                            setmodalIsOpen(true);
                            getTweetById(item._id);
                          }}
                        />
                        <small>1</small>{" "}
                        <Modal
                          isOpen={modalIsOpen}
                          onRequestClose={() => setmodalIsOpen(false)}
                          style={{
                            overlay: {
                              backgroundColor: "rgba(240, 240, 240, 0.1)",
                              position: "fixed",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                            },
                            content: {
                              position: "absolute",
                              top: "100px",
                              left: "400px",
                              right: "400px",
                              bottom: "180px",
                            },
                          }}
                        >
                          <p>
                            {commentTweet && commentTweet.userId.username}{" "}
                            <small>
                              @{commentTweet && commentTweet.userId.username}
                            </small>{" "}
                          </p>
                          <p>{commentTweet.description} </p>
                          <form
                            className="create-post"
                            onSubmit={handelCreateTweet}
                          >
                            <div className="post-inp">
                              <img
                                src="https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324-300x300.png"
                                alt=""
                                className="profile1"
                              />
                              <textarea
                                type="text"
                                placeholder="Comment"
                                onChange={(e) => setComment(e.target.value)}
                              />
                            </div>
                            <hr />
                            <div className="icon">
                              <div style={{ paddingLeft: "50px" }}>
                                <span>
                                  <AiOutlineFileImage
                                    size={20}
                                    style={{ color: "rgb(29, 155, 240)" }}
                                  />{" "}
                                </span>
                                <span>
                                  <MdTagFaces
                                    size={20}
                                    style={{ color: "rgb(29, 155, 240)" }}
                                  />{" "}
                                </span>
                                <span>
                                  <BiPoll
                                    size={20}
                                    style={{ color: "rgb(29, 155, 240)" }}
                                  />{" "}
                                </span>
                                <span>
                                  <FaMapMarkerAlt
                                    size={20}
                                    style={{ color: "rgb(29, 155, 240)" }}
                                  />{" "}
                                </span>
                              </div>
                              <input
                                type="submit"
                                value="Comment"
                                className="btn3"
                                onClick={() => handelCreateComment(item._id)}
                              />
                            </div>
                          </form>
                          <a
                            onClick={() => setmodalIsOpen(false)}
                            className="close"
                          >
                            X
                          </a>
                        </Modal>
                      </span>
                      <span>
                        <FaShareAlt style={{ color: " #536471" }} />{" "}
                      </span>
                      <span>
                        <FiBookmark style={{ color: "#536471" }} />{" "}
                      </span>
                    </div>
                  </div>
                ))}

              <div className="feed">
                <div className="head">
                  <div className="user">
                    <img
                      src="https://www.everblazing.org/wp-content/uploads/2017/06/avatar-372-456324-300x300.png"
                      alt=""
                      className="profile"
                    />

                    <div className="info">
                      <h3>
                        {" "}
                        Selene Richard{" "}
                        <span style={{ color: "#536471" }}>
                          @ Selene Richard{" "}
                        </span>
                      </h3>
                      <small> Dubai, 15 minutes ago</small>
                      <p>
                        <b> Selene Richard</b> It is a long established fact
                        that a reader will be distracted{" "}
                      </p>
                    </div>
                  </div>
                  <span className="edit">
                    <GoSearch />
                  </span>
                </div>

                <div className="photo">
                  <img
                    src="https://images.pexels.com/photos/3155661/pexels-photo-3155661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    width="100%"
                  />
                </div>

                <div className="action">
                  <span>
                    <FaHeart style={{ color: "#536471" }} />
                    <small>1</small>{" "}
                  </span>
                  <span>
                    <FaRegComment style={{ color: "#536471" }} />
                    <small>1</small>{" "}
                  </span>
                  <span>
                    <FaShareAlt style={{ color: " #536471" }} />{" "}
                  </span>
                  <span>
                    <FiBookmark style={{ color: "#536471" }} />{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="friends">
              <div className="search-box">
                <GoSearch />{" "}
                <input type="search" placeholder="Search Twitter" />
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
                    <p className="text">
                      Lorem ipsum dolor sit ipsum dolor sit
                    </p>
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
                    <p className="text">
                      Lorem ipsum dolor sit ipsum dolor sit
                    </p>
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
                    <p className="text">
                      Lorem ipsum dolor sit ipsum dolor sit
                    </p>
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
                  <div className="info">
                    <img
                      src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="profile"
                    />

                    <div className="handle">
                      <h4>Selene Richard</h4>
                      <p className="text">Lorem ipsum dolor sit</p>
                    </div>
                    <input type="submit" value="Follow" className="btn33" />
                  </div>
                  <div className="info">
                    <img
                      src="https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="profile"
                    />

                    <div className="handle">
                      <h4>David john</h4>
                      <p className="text">Lorem ipsum dolor sit</p>
                    </div>
                    <input type="submit" value="Follow" className="btn33" />
                  </div>
                  <div className="info">
                    <img
                      src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="profile"
                    />

                    <div className="handle">
                      <h4>Dany James</h4>
                      <p className="text">Lorem ipsum dolor sit</p>
                    </div>
                    <input type="submit" value="Follow" className="btn33" />
                  </div>
                  <div className="info">
                    <img
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="profile"
                    />

                    <div className="handle">
                      <h4>Joseph thomas</h4>
                      <p className="text">Lorem ipsum dolor sit</p>
                    </div>
                    <input type="submit" value="Follow" className="btn33" />
                  </div>
                  <div className="info">
                    <img
                      src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="profile"
                    />

                    <div className="handle">
                      <h4>William David</h4>
                      <p className="text">Lorem ipsum dolor sit</p>
                    </div>
                    <input type="submit" value="Follow" className="btn33" />
                  </div>
                  <div className="info">
                    <img
                      src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                      className="profile"
                    />

                    <div className="handle">
                      <h4>Mark James</h4>
                      <p className="text">Lorem ipsum dolor sit</p>
                    </div>
                    <input type="submit" value="Follow" className="btn33" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
