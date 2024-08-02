import { memo } from "react";

const Navbar = ({ adjective }) => {
  console.log("Navbar is rendered");
  return <div>i am a {adjective} Navbar</div>;
};

export default memo(Navbar);
