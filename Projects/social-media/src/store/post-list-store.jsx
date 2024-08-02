import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, tags, reactions) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        tags: tags,
        reactions: reactions,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

// This is below data is the initial data of useReducer as a sample

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to mumbai",
//     body: "Hi friends, I'm going to mumbai for vacations. Hope to enjoy a lot.",
//     reaction: 2,
//     userId: "user-9",
//     tags: ["vacation", "mumbai", "Enjoying"],
//     reactions: 45,
//   },
// ];
//   {
//     id: "2",
//     title: "Btech",
//     body: "Hi friends, I have passed Btech with first dictation.",
//     reaction: 65,
//     userId: "user-78",
//     tags: ["passed", "btech", "enthusiastic"],
//   },
//   {
//     id: "3",
//     title: "Vacation in Paris",
//     body: "hey dosto, we are traveling to paris, Hola!",
//     reaction: 1555,
//     userId: "user-98",
//     tags: ["paris", "eifilltower", "travel", "travelling", "lovetotravel"],
//   },
// ];
export default PostListProvider;
