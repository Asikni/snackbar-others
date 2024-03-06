import "./App.css";
import Snackbar from "./components/Snackbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SnackbarType = {
  success: "success",
  fail: "fail",
};

function SnackBarApp() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  function setTimer() {
    setShowSnackbar(false);
  }

  const navigate = useNavigate();

  const navigateToSidebar = () => {
    navigate("/Sidebar");
  };

  return (
    <div className="App">
      <button
        className="showSnackbarBttn"
        onClick={() => {
          setShowSnackbar((prevState) => !prevState);
          setTimeout(setTimer, 2900);
        }}
      >
        Show Snackbar
      </button>
      <button
        style={{
          color: "white",
          backgroundColor: "cornflowerblue",
          padding: "20px 40px",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "15px",
          cursor: "pointer",
        }}
        onClick={navigateToSidebar}
      >
        Switch to Home
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
