import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Comment() {
  const [comment, setComment] = useState("");
  const token = localStorage.getItem("token");

  const { tweetId } = useParams();

  const getAllComment = async () => {
    await axios
      .get(`http://localhost:5000/api/getCommentBytweetId/${tweetId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getAllComment();
  }, []);
  return <div></div>;
}
