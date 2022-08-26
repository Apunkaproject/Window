import { Col, Row, Image } from "antd";
import restart from "../../assets/ui/refresh.png";
import "./power.css";
function PowerBtn() {
  return (
    <>
      <Row className="power-btn">
        <Col style={{ width: "100%" }}>
          <button className="powerbtn" style={{ width: "100%" }}>
            <Row align="middle">
              <Image width={20} preview={false} src={restart} />
              <Row style={{ marginLeft: "5px" }}>Restart</Row>
            </Row>
          </button>
          <button className="powerbtn" style={{ width: "100%" }}>
            <Row align="middle">
              <Image width={20} preview={false} src={restart} />
              <Row style={{ marginLeft: "5px" }}>Restart</Row>
            </Row>
          </button>
          <button className="powerbtn" style={{ width: "100%" }}>
            <Row align="middle">
              <Image width={20} preview={false} src={restart} />
              <Row style={{ marginLeft: "5px" }}>Restart</Row>
            </Row>
          </button>
        </Col>
      </Row>
    </>
  );
}
export default PowerBtn;
