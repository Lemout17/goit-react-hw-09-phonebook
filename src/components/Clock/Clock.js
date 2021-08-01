import { useState, useEffect } from "react";

import s from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className={s.container}>
      <p> Current time: {time.toLocaleTimeString()}</p>
    </div>
  );
}
