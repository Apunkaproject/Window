import "./lockscreen.css";
import { Row, Col } from "antd";
import LockHead from "./lockhead";
import { useState } from "react";

function LockScreen() {
  const [isclick, setIsclick] = useState(true);

  function clickonlock() {
    setIsclick(!isclick);
  }
  return (
    <>
      <Row
        justify="center"
        className="lock-bg"
        style={{ width: "100%", height: "100%" }}
      >
        {isclick && <LockHead />}
        <button onClick={clickonlock}>Click</button>
      </Row>
    </>
  );
}
export default LockScreen;
