import { useEffect, useState } from "react";
import "./countdown.css";

function Countdown({ days, hours, mins, secs }) {
  const [daysCounter, setDaysCounter] = useState(days);
  const [hoursCounter, setHoursCounter] = useState(hours);
  const [minsCounter, setMinsCounter] = useState(mins);
  const [secsCounter, setSecsCounter] = useState(secs);

  const coundownInterval = setInterval(() => {
    if (!(daysCounter || hoursCounter || minsCounter || secsCounter)) {
      clearInterval(countdownInterval);
      return;
    }

    if (secsCounter !== 0) {
      setSecsCounter(secsCounter - 1);
      return;
    }

    setSecsCounter(59);
    if (minsCounter !== 0) {
      setMinsCounter(minsCounter - 1);
      return;
    }

    setMinsCounter(59);
    if (hoursCounter !== 0) {
      setHoursCounter(hoursCounter - 1);
      return;
    }

    setHoursCounter(23);
    if (daysCounter !== 0) {
      setDaysCounter(daysCounter - 1);
      return;
    }
  }, 1000);

  return (
    <section className="font-brush h-full w-full text-primary text-center">
      <div className="flex h-full w-full justify-evenly">
        <div className=" text-neutral-content flex flex-col rounded-lg p-2">
          <span className="countdown text-white text-4xl">
            <span style={{ "--value": daysCounter }}></span>
          </span>
          days
        </div>
        <div className=" text-neutral-content flex flex-col rounded-lg p-2">
          <span className="countdown text-white text-4xl">
            <span style={{ "--value": hoursCounter }}></span>
          </span>
          hours
        </div>
        <div className=" text-neutral-content flex flex-col rounded-lg p-2">
          <span className="countdown text-white text-4xl">
            <span style={{ "--value": minsCounter }}></span>
          </span>
          min
        </div>
        <div className=" text-neutral-content flex flex-col rounded-lg p-2">
          <span className="countdown text-white text-4xl">
            <span style={{ "--value": secsCounter }}></span>
          </span>
          sec
        </div>
      </div>
    </section>
  );
}

export default Countdown;
