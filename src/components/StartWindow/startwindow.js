import { Row, Col, Image } from "antd";
import "./startwindow.css";
import { Input } from "antd";
import edge from "../../assets/Taskbar/edge.png";
const { Search } = Input;
function StartWindow() {
  const onSearch = (value) => console.log(value);
  const iconsize = 35;
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
          <div style={{}}>
            <Row
              align="middle"
              justify="space-between"
              style={{ width: "100%", marginTop: "20px ", padding: "0px 20px" }}
            >
              <div style={{ fontSize: "17px" }}>Pinned</div>
              <button className="startallapp"> All Apps</button>
            </Row>
            <Row
              align="middle"
              justify="space-between"
              style={{ width: "100%", marginTop: "20px " }}
            >
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
            </Row>
            <Row
              align="middle"
              justify="space-between"
              style={{ width: "100%", marginTop: "20px " }}
            >
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
              <button className="pinnedapp">
                <Col>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ width: "100%" }}
                  >
                    <Image
                      width={iconsize}
                      preview={false}
                      className="profile-image"
                      src={edge}
                    />
                  </Row>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ marginTop: "5px", width: "100%" }}
                  >
                    Edge
                  </Row>
                </Col>
              </button>
            </Row>
          </div>
          {/* recommandded  */}
          <div>
            <Row
              align="middle"
              justify="space-between"
              style={{ width: "100%", marginTop: "20px ", padding: "0px 20px" }}
            >
              <div style={{ fontSize: "17px" }}>Recomanded</div>
              <button className="startallapp">More</button>
            </Row>
            <Row
              align="middle"
              justify="space-between"
              style={{ width: "100%", marginTop: "20px ", padding: "0px 20px" }}
            >
              <Col style={{}} span={11}>
                <Row
                  className="Recommandedapp"
                  style={{ padding: "10px", marginBottom: "10px" }}
                >
                  <Image
                    width={iconsize}
                    preview={false}
                    className="profile-image"
                    src={edge}
                  />
                  <Col style={{ marginLeft: "10px" }}>
                    <div style={{ fontSize: "15px" }}>Edge</div>
                    <div style={{ fontSize: "13px" }}>Recently Added</div>
                  </Col>
                </Row>
                <Row
                  className="Recommandedapp"
                  style={{ padding: "10px", marginBottom: "10px" }}
                >
                  <Image
                    width={iconsize}
                    preview={false}
                    className="profile-image"
                    src={edge}
                  />
                  <Col style={{ marginLeft: "10px" }}>
                    <div style={{ fontSize: "15px" }}>Edge</div>
                    <div style={{ fontSize: "13px" }}>Recently Added</div>
                  </Col>
                </Row>
                <Row
                  className="Recommandedapp"
                  style={{ padding: "10px", marginBottom: "10px" }}
                >
                  <Image
                    width={iconsize}
                    preview={false}
                    className="profile-image"
                    src={edge}
                  />
                  <Col style={{ marginLeft: "10px" }}>
                    <div style={{ fontSize: "15px" }}>Edge</div>
                    <div style={{ fontSize: "13px" }}>Recently Added</div>
                  </Col>
                </Row>
              </Col>
              <Col style={{}} span={11}>
                <Row
                  className="Recommandedapp"
                  style={{ padding: "10px", marginBottom: "10px" }}
                >
                  <Image
                    width={iconsize}
                    preview={false}
                    className="profile-image"
                    src={edge}
                  />
                  <Col style={{ marginLeft: "10px" }}>
                    <div style={{ fontSize: "15px" }}>Edge</div>
                    <div style={{ fontSize: "13px" }}>Recently Added</div>
                  </Col>
                </Row>
                <Row
                  className="Recommandedapp"
                  style={{ padding: "10px", marginBottom: "10px" }}
                >
                  <Image
                    width={iconsize}
                    preview={false}
                    className="profile-image"
                    src={edge}
                  />
                  <Col style={{ marginLeft: "10px" }}>
                    <div style={{ fontSize: "15px" }}>Edge</div>
                    <div style={{ fontSize: "13px" }}>Recently Added</div>
                  </Col>
                </Row>
                <Row
                  className="Recommandedapp"
                  style={{ padding: "10px", marginBottom: "10px" }}
                >
                  <Image
                    width={iconsize}
                    preview={false}
                    className="profile-image"
                    src={edge}
                  />
                  <Col style={{ marginLeft: "10px" }}>
                    <div style={{ fontSize: "15px" }}>Edge</div>
                    <div style={{ fontSize: "13px" }}>Recently Added</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {/* recommandded */}
        </Col>
      </Row>
    </>
  );
}
export default StartWindow;
