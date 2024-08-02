import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

// return (

//     <>
//       <h1>Welcome: {count}</h1>
//       <button onClick={()=>setCount(count +1)}>Increment </button>
//       <button onClick={()=> setCount(count - 1)}>Decrement</button>
//   </>
// )

// const initialState=0;
// const reducer = (state, action)=>{
//     switch(action){
//       case "increment":
//         return state+1;
//       case  "decrement":
//       return state -1;
//       default :
//       return state;
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

  const getAdjective = () => {
    return "another";
  };

  return (
    <>
      {/* <div>Count = {count}</div>
      <button onClick={()=> dispatch("increment")}>Increment</button>
      <button onClick={()=> dispatch("decrement")}>Decrement</button> */}

      <Navbar adjective={"good"} />
      <div>{`count is: ${count}`}</div>
      <button onClick={() => setCount(() => count + 1)}>button</button>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
