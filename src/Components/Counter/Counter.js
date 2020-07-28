import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { reset, increment, decrement } from "../../redux/actions/counterAction";
import classes from "./Counter.module.css";

const Counter = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const plus = () => {
    dispatch(increment(10));
  };

  const minus = () => {
    dispatch(decrement(150));
  };

  const refresh = () => {
    dispatch(reset());
  };

  return (
    <div className={classes.Container}>
      <h1>Counter</h1>
      {/* <div className={classes.Count}>{props.counter}</div> */}
      <div className={classes.Count}>{counter}</div>
      <div>
        {/* <button onClick={() => props.decrement(10)}>-</button>
        <button onClick={props.reset}>0</button>
        <button onClick={() => props.increment(150)}>+</button> */}
        <button onClick={minus}>-</button>
        <button onClick={refresh}>0</button>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};

// const mapStateToProps = (store) => ({
//   counter: store.counter,
// });

// const mapDispatchToProps = {
//   reset,
//   increment,
//   decrement,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;

// {} props
// {} mapStateToProps
// {} mapDispatchToProps

// {...props, ...mapStateToProps, ...mapDispatchToProps}

// dispatch()

// const reset = dispatch(reset())
// const reset = dispatch({
//   type: RESET,
// });
