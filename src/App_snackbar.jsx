import "./App.css";
import Snackbar from "./components/Snackbar";

import { useState } from "react";

const SnackbarType = {
  success: "success",
  fail: "fail",
};

function SnackBarApp() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  function setTimer() {
    setShowSnackbar(false);
  }

  return (
    <div className="App">
      <button
        className="showSnackbarBttn"
        onClick={() => {
          console.log("hello");
          setShowSnackbar((prevState) => !prevState);
          setTimeout(setTimer, 5900);
        }}
      >
        Show Snackbar
      </button>
      <Snackbar
        message="Task Completed Successfully!"
        type={SnackbarType.success}
        showSnackbar={showSnackbar}
        snackBarStatus={setShowSnackbar}
      />
    </div>
  );
}

export default SnackBarApp;
