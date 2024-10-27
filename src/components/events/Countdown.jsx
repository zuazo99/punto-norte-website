import { useEffect, useState } from "react";
import "./countdown.css";

function Countdown({ eventDate}) {
  //const initialTime = days * 86400 + hours * 3600 + mins * 60 + secs;

  const targetDate = new Date(eventDate).getTime();
  const [timeRemaining, setTimeRemaining] = useState(targetDate - Date.now());
  /*const coundownInterval = setInterval(() => {
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
    }, 1000);*/

  useEffect(() => {
    if (timeRemaining < 0) return

    const countdownInterval = setInterval(() => {
      const newTimeRemaining = targetDate - Date.now();
      if (newTimeRemaining <= 0) {
        clearInterval(countdownInterval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(newTimeRemaining);
      }
    }, 1000)
    return () => clearInterval(countdownInterval)
  }, [targetDate, timeRemaining]);

  /*useEffect(() => {
    if (timeRemaining <= 0) return;

    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(countdownInterval);
  }, [timeRemaining]);*/

  const daysCounter = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursCounter = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minsCounter = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const secsCounter = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <section className="h-full w-full text-center font-brush text-primary">
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
