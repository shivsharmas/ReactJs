import { useEffect, useState } from "react";

let ShowingTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval has been setup");
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("cancel the interval");
    };
  }, []);

  return (
    <div>
      <p>
        This is Current Time: {time.toLocaleTimeString} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default ShowingTime;
