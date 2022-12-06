import { useEffect } from 'react';

type Props = {
  timerInterval: number;
};

const TimerComponent = (props: Props) => {


  useEffect(() => {
    const timer = setTimeout()
  }, [props.timerInterval]);
};

export default TimerComponent;
