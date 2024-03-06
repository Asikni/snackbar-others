import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/Home");
  };
  //wherever any anything is wrapped in layout will become children and then is passed here
  return (
    <div
      style={{ border: "5px solid red", display: "flex", flexDirection: "row" }}
    >
      <Sidebar />
      {children}
      <div>
        <button onClick={navigateToHome}>Home</button>
      </div>
    </div>
  );
};

export default Layout;
