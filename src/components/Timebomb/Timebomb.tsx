import { useContext, useState, useEffect } from "react";

interface TimebombProps {
  name: string;
  secondsToCountdown: number;
  isCountingDownList: (boolean | null)[];
  setIsCountingDown: (isCountingDown: (boolean| null)[]) => void;
  index: number;
}

export const getRandomIntBetween10And20 = () => {
  const randomIntBetween0And10 = Math.floor(Math.random() * 10)
  return randomIntBetween0And10 + 10
}

export const getCountdownText = (secondsToCountdown: number): string => {
  if (secondsToCountdown === 0) {
    return 'Exploded'
  } else if (secondsToCountdown === 1) {
    return '1 second'
  } else {
    return `${secondsToCountdown} seconds`
  }
}

export const Timebomb = (props: TimebombProps) => {
  const [countDown, setCountDown] = useState(props.secondsToCountdown);
  const countDownDate = new Date().getTime() + countDown * 1000;

  useEffect(() => {
    if (props.isCountingDownList[props.index]) {
      const interval = setInterval(() => {
          const now = new Date().getTime();
          const remainingTime = Math.max(0, countDownDate - now);
          const countDownValue = Math.floor((remainingTime % (1000 * 60)) / 1000)
          setCountDown(countDownValue);
          if (countDownValue === 0) {
            
            let countingDownList = props.isCountingDownList;
            countingDownList[props.index] = false;
            console.log('countingDownList', countingDownList)
            props.setIsCountingDown(countingDownList);
          }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [props.isCountingDownList]);

  return <div className="bomb-countdown-tile">
    <div className="bomb-name">{props.name}</div>
    <div className={countDown === 0 ? 'countdown exploded': 'countdown'}>
      {getCountdownText(countDown)}
    </div>
  </div>
}