import "./lockscreen.css";
import { Row, Col } from "antd";
import LockHead from "./lockhead";
import { useState, useEffect } from "react";
import Login from "./login";

function LockScreen() {
  const [isclick, setIsclick] = useState(true);
  const [enterkey, setenterkey] = useState("a");
  const [clicks, setclicks] = useState(true);
  useEffect(() => {
    document.addEventListener("keydown", EnterKeypress, true);
  });

  function onclicks() {
    console.log("click touch", clicks);

    setclicks(false);
  }
  function EnterKeypress(e) {
    setenterkey(e.key);

    console.log(e.key);
    if (enterkey === "Enter") {
      setIsclick(false);
    }
  }

  return (
    <>
      <Row
        onClick={onclicks}
        justify="center"
        className="lock-bg"
        style={{ width: "100%", height: "100%" }}
      >
        {isclick && clicks ? <LockHead /> : <Login />}
      </Row>
    </>
  );
}
export default LockScreen;
