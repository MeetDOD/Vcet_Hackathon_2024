import React, { useState, useEffect } from 'react';
import TimerCss from './Timer.module.css';

const Timer = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [radius, setRadius] = useState(70);

  useEffect(() => {
    const countDownDate = new Date('October 6, 2023 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimerDays(0);
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
      } else {
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div  id='timer'>
      <br/>
      <br/>
<div className={`p-2 p-md-5 ${TimerCss.bgBlue}`}>
      <div class="glitch-wrapper">
        <h1 class="glitch" data-text="Time is Ticking, Get Ready to Shine!">
          Time is Ticking, Get Ready to Shine!
        </h1>
      </div>
      <div className={`p-2 p-md-5 ${TimerCss.container}`}>
        <div className={TimerCss.timer}>
          <div className={`${TimerCss.content} ${TimerCss.box}`}>
            <div
              className={`${TimerCss.dots} ${TimerCss.day_dot}`}
              style={{ transform: `rotate(${timerDays * 15}deg)` }}
            ></div>
            <svg>
              <circle cx="70" cy="70" r={radius}></circle>
              <circle
                cx="70"
                cy="70"
                r={radius}
                style={{ strokeDashoffset: `${440 - (440 * timerDays) / 24}` }}
              ></circle>
            </svg>
            <div className={`${TimerCss.day} ${TimerCss.time}`}>
              <p>{timerDays}</p>
              <span>Days</span>
            </div>
          </div>
          <div className={`${TimerCss.content} ${TimerCss.box}`}>
            <div
              className={`${TimerCss.dots} ${TimerCss.hr_dot}`}
              style={{ transform: `rotate(${timerHours * 30}deg)` }}
            ></div>
            <svg>
              <circle cx="70" cy="70" r={radius}></circle>
              <circle
                cx="70"
                cy="70"
                r={radius}
                style={{ strokeDashoffset: `${440 - (440 * timerHours) / 12}` }}
              ></circle>
            </svg>
            <div className={`${TimerCss.hours} ${TimerCss.time}`}>
              <p>{timerHours}</p>
              <span>Hours</span>
            </div>
          </div>
          <div className={`${TimerCss.content} ${TimerCss.box}`}>
            <div
              className={`${TimerCss.dots} ${TimerCss.min_dot}`}
              style={{ transform: `rotate(${timerMinutes * 6}deg)` }}
            ></div>
            <svg>
              <circle cx="70" cy="70" r={radius}></circle>
              <circle
                cx="70"
                cy="70"
                r={radius}
                style={{ strokeDashoffset: `${440 - (440 * timerMinutes) / 60}` }}
              ></circle>
            </svg>
            <div className={`${TimerCss.min} ${TimerCss.time}`}>
              <p>{timerMinutes}</p>
              <span>Minutes</span>
            </div>
          </div>
          <div className={`${TimerCss.content} ${TimerCss.box}`}>
            <div
              className={`${TimerCss.dots} ${TimerCss.sec_dot}`}
              style={{ transform: `rotate(${timerSeconds * 6}deg)` }}
            ></div>
            <svg>
              <circle cx="70" cy="70" r={radius}></circle>
              <circle
                cx="70"
                cy="70"
                r={radius}
                style={{ strokeDashoffset: `${440 - (440 * timerSeconds) / 60}` }}
              ></circle>
            </svg>
            <div className={`${TimerCss.sec} ${TimerCss.time}`}>
              <p>{timerSeconds}</p>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Timer;
