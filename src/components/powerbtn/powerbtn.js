import { Col, Row, Image } from "antd";
import restart from "../../assets/ui/refresh.png";
import moon from "../../assets/ui/moon.png";
import power from "../../assets/ui/power.png";
import "./power.css";
function PowerBtn() {
  return (
    <>
      <Row className="power-btn">
        <Col style={{ width: "100%" }}>
          <button className="powerbtn" style={{ width: "100%" }}>
            <Row align="middle">
              <Image width={20} preview={false} src={moon} />
              <Row style={{ marginLeft: "10px" }}>Sleep</Row>
            </Row>
          </button>
          <button className="powerbtn" style={{ width: "100%" }}>
            <Row align="middle">
              <Image width={20} preview={false} src={power} />
              <Row style={{ marginLeft: "10px" }}>Shut down</Row>
            </Row>
          </button>
          <button className="powerbtn" style={{ width: "100%" }}>
            <Row align="middle">
              <Image width={20} preview={false} src={restart} />
              <Row style={{ marginLeft: "10px" }}>Restart</Row>
            </Row>
          </button>
        </Col>
      </Row>
    </>
  );
}
export default PowerBtn;
