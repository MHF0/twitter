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
import { AiOutlineFileImage, AiOutlineEdit } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { format } from "timeago.js";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import LiftSide from "../LeftSide/LiftSide";
import RightSide from "../RightSide/RightSide";
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
  const curentUser = localStorage.getItem("curentUser");

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
    await axios
      .post(
        `http://localhost:5000/api/createComment/${tweetId}`,
        { comment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        setComment(result.data.result);
      })
      .catch((err) => {
        // toast.error(err.response.data.message);
      });
  };

  const handeldeleteTweet = async (tweetId) => {
    await axios
      .delete(`http://localhost:5000/api/deleteTweet/${tweetId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        toast.error("The tweet has been deleted secsessfly");

        getAllTweet();
      })
      .catch((err) => {
        //
      });
  };

  const handelUpdateTweet = async (tweetId) => {
    await axios
      .put(
        `http://localhost:5000/api/updateTweet/${tweetId}`,
        { description },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        toast(result.data.message);
        getAllTweet();
      })
      .catch((err) => {
        //
      });
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <LiftSide />
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
                          {/* <Link to={`/comment/${item._id}`}> */}
                          <p>{item.description} </p>
                          {/* </Link> */}
                        </div>
                      </div>
                      {curentUser.toLowerCase() === item.userId.email ? (
                        <>
                          <span className="edit">
                            <TiDeleteOutline
                              size={25}
                              onClick={() => handeldeleteTweet(item._id)}
                            />
                            <AiOutlineEdit
                              size={25}
                              onClick={() => {
                                setmodalIsOpen2(true);
                              }}
                            />
                          </span>
                          <Modal
                            isOpen={modalIsOpen2}
                            onRequestClose={() => setmodalIsOpen2(false)}
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
                            <textarea
                              type="text"
                              placeholder="Tweet"
                              onChange={(e) => setDescription(e.target.value)}
                            />

                            <button onClick={() => handelUpdateTweet(item._id)}>
                              Update
                            </button>
                            <a
                              onClick={() => setmodalIsOpen2(false)}
                              className="close"
                            >
                              X
                            </a>
                          </Modal>
                        </>
                      ) : (
                        ""
                      )}
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
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Home;
