import { useContext } from "react";
import "../App.css";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}

        <div
          className="alert alert-success"
          style={{ marginTop: "10px" }}
          role="alert"
        >
          {`This post has reacted by ${post.reactions.likes} people`}
        </div>
        <div
          className="alert alert-danger"
          style={{ marginTop: "10px" }}
          role="alert"
        >
          {`This post has disliked by ${post.reactions.dislikes} people`}
        </div>
      </div>
    </div>
  );
};

export default Post;
