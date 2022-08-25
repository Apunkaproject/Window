import { Row, Col } from "antd";
import "./lockscreen.css";
function LockHead() {
  return (
    <>
      <Row className="Lockhead">
        <Col style={{ width: "100%", height: "100%" }}>
          <Row align="middle" justify="center" style={{ width: "100%" }}>
            OOO
          </Row>
          <Row
            align="middle"
            justify="center"
            style={{ width: "100%", fontSize: "18px", fontWeight: "600" }}
          >
            Looking for you
          </Row>
          <Row
            align="middle"
            justify="center"
            style={{ width: "100%", fontSize: "100px", fontWeight: "600" }}
          >
            12:30
          </Row>
          <Row
            align="middle"
            justify="center"
            style={{ width: "100%", fontSize: "25px", fontWeight: "600" }}
          >
            Wednesday,October 22
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default LockHead;
