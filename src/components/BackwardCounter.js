import useCounter from "../hooks/use-conter";

import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
