import { Row, Col } from "antd";
import "./startwindow.css";
import { Input } from "antd";
const { Search } = Input;
function StartWindow() {
  const onSearch = (value) => console.log(value);
  return (
    <>
      <Row className="start-windows">
        <Col style={{ width: "100%", height: "100%" }}>
          <Row align="middle" style={{ width: "100%" }}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              className="startsearch"
            />
          </Row>
          <Row align="middle" justify="space-between" style={{ width: "100%" }}>
            <div>Pinned</div>
            <button> All Apps</button>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default StartWindow;
