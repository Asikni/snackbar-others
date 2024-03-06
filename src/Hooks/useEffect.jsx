import { useEffect, useState } from "react";

function WindowSizeList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    console.log("runs");
    return () => {
      // this is used to remove the instructions (clean the event listener) that we gave before, sort of like
      //after running the instruction we do clean up and then again run it when we change state
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <>
      <div>Window Width: {windowWidth}</div>
    </>
  );
}
export default WindowSizeList;
