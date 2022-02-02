import React from "react"
import { useSelector, useDispatch } from 'react-redux';

store.dispatch(getGreetingData);
const Greeting = () => {
  const greetings = useSelector((state) => state.greetingData);
  const greetingArr = [];
  const randomNumber = Math.floor(Math.random() * 5);

  Object.entries(greetings).map(([key, value]) =>
    greetingArr.push(value['greetings'])
  );

  return <p className='greeting'>{greetingArr[randomNumber]}</p>;
};


export default Greeting;
