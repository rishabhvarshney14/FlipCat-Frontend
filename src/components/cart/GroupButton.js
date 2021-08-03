import React, { useState } from "react";

// UI Component
import { Button, ButtonGroup, makeStyles } from "@material-ui/core";

// Styles
const useStyle = makeStyles({
  component: {
    marginTop: 58,
  },
  button: {
    borderRadius: "30%",
  },
});

const GroupButton = () => {
  const classes = useStyle();
  const [counter, setCounter] = useState(1);

  const handleDecrement = () => {
    const temp = counter;
    setCounter(temp - 1);
  };

  const handleIncrement = () => {
    const temp = counter;
    setCounter(temp + 1);
  };

  return (
    <ButtonGroup className={classes.component}>
      <Button
        className={classes.button}
        disabled={counter === 1}
        onClick={() => handleDecrement()}
      >
        -
      </Button>
      <Button>{counter}</Button>
      <Button className={classes.button} onClick={() => handleIncrement()}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default GroupButton;
