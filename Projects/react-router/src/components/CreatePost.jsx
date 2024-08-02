import { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
        /* other product data */
      }),
    })
      .then((res) => res.json())
      .then(console.log);

    addPost(userId, postTitle, postBody, tags);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Userid
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="title"
            placeholder="your user id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="how are you feeling..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Body
          </label>
          <input
            type="text"
            ref={postBodyElement}
            className="form-control"
            id="body"
            placeholder="tell us more aboutb it..."
          />
        </div>

        {/* <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of reaction
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            placeholder="how many people react"
          />
        </div> */}

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter the hashtags here
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="enter tags to reach to more people"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
