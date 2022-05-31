import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5001/images/";
  return (
    <div className="post">

    <Link to={`/post/${post._id}`} className="link">
      <span className="postTitle">{post.title}</span>
    </Link>
    <span >
      <br></br>
      {new Date(post.createdAt).toDateString()}
    </span>
    <p>{post.username}</p><br></br>
    <p>{post.desc}</p>
    <Link to={`/post/${post._id}`} className="link">
    {post.photo && <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="20%" height="20%" x="50%" y="50%" src={PF + post.photo} alt="" />}
    </Link>
    <hr /></div>
  );
}