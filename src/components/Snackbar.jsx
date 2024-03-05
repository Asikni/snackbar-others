import "./Snackbar.css";
import { useRef } from "react";
const Snackbar = (props) => {
  const ref = useRef();

  return (
    <div
      ref={ref}
      className="snackbar"
      id={props.showSnackbar ? "show" : "hide"}
      style={{
        backgroundColor: props.type === "success" ? "#00F593" : "#FF0033",
        color: props.type === "success" ? "black" : "white",
      }}
    >
      <div className="symbol">
        {props.type === "success" ? (
          <h1
            style={{ border: "1px solid red" }}
            onClick={() => {
              ref.current.id = "hide";
            }}
          >
            &#x2613;
          </h1>
        ) : (
          <h1>&#x2613;</h1>
        )}
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
};

export default Snackbar;
