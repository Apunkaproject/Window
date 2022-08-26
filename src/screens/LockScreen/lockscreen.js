import "./lockscreen.css";
import { Row, Col } from "antd";
import LockHead from "./lockhead";
import { useState, useEffect } from "react";
import Login from "./login";

function LockScreen() {
  const [isclick, setIsclick] = useState(true);
  const [enterkey, setenterkey] = useState("a");
  useEffect(() => {
    document.addEventListener("keydown", EnterKeypress, true);
  });
  function EnterKeypress(e) {
    setenterkey(e.key);
    console.log(typeof enterkey);
    console.log(e.key);
    if (enterkey === "Enter") {
      setIsclick(false);
    }
  }

  return (
    <>
      <Row
        justify="center"
        className="lock-bg"
        style={{ width: "100%", height: "100%" }}
      >
        {isclick ? <LockHead /> : <Login />}
      </Row>
    </>
  );
}
export default LockScreen;
