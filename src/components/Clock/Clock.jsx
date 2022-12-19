import { useState, useEffect } from "react";
import './style.css'


const Clock = () => {
  const [clock, setClock] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const clock = setInterval(
      () => setClock(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
      1000
    );

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div>
      {/*<div >
            {new Date().toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </div>*/}

      <div className="clock">
        <div className="clock__box">
          {clock}
        </div>
      </div>
    </div>
  );
};

export default Clock;