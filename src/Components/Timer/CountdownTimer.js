import React from 'react';
import { useCountdown } from './useCountdown'
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <p
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
        <DateTimeDisplay value={hours} type={'HRS'} isDanger={false} />
        <DateTimeDisplay value={minutes} type={'MINS'} isDanger={false} />
        <DateTimeDisplay value={seconds} type={'SECS'} isDanger={false} />
      </p>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;