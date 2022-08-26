import { Row, Image, Col, Slider } from "antd";
import "./wifisoundbtry.css";
import wifi from "../../assets/ui/wifi.png";
import right from "../../assets/ui/right.png";
function WifiSoundBtry() {
  return (
    <>
      <Row className="rightsidebtn" align="bottom">
        <Col style={{ width: "100%" }}>
          <Row align="middle" justify="space-between" style={{ width: "100%" }}>
            <Col>
              <button className="wifirightbtn">
                <Row
                  align="middle"
                  justify="center"
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "0px 5px",
                  }}
                >
                  <Image
                    style={{}}
                    width={20}
                    preview={false}
                    className="profile-image"
                    src={wifi}
                  />
                </Row>
                <Row
                  justify="center"
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Groot 5G
                </Row>
              </button>
            </Col>
            <Col>
              <button className="wifirightbtn">
                <Row
                  align="middle"
                  justify="center"
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "0px 5px",
                  }}
                >
                  <Image
                    style={{}}
                    width={20}
                    preview={false}
                    className="profile-image"
                    src={wifi}
                  />
                </Row>
                <Row
                  justify="center"
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Groot 5G
                </Row>
              </button>
            </Col>
            <Col>
              <button className="wifirightbtn">
                <Row
                  align="middle"
                  justify="center"
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "0px 5px",
                  }}
                >
                  <Image
                    style={{}}
                    width={20}
                    preview={false}
                    className="profile-image"
                    src={wifi}
                  />
                </Row>
                <Row
                  justify="center"
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Groot 5G
                </Row>
              </button>
            </Col>
          </Row>
          <Row
            align="middle"
            justify="space-between"
            style={{ width: "100%", marginTop: "50px" }}
          >
            <Col>
              <button className="wifirightbtn">
                <Row
                  align="middle"
                  justify="center"
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "0px 5px",
                  }}
                >
                  <Image
                    style={{}}
                    width={20}
                    preview={false}
                    className="profile-image"
                    src={wifi}
                  />
                </Row>
                <Row
                  justify="center"
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Groot 5G
                </Row>
              </button>
            </Col>
            <Col>
              <button className="wifirightbtn">
                <Row
                  align="middle"
                  justify="center"
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "0px 5px",
                  }}
                >
                  <Image
                    style={{}}
                    width={20}
                    preview={false}
                    className="profile-image"
                    src={wifi}
                  />
                </Row>
                <Row
                  justify="center"
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Groot 5G
                </Row>
              </button>
            </Col>
            <Col>
              <button className="wifirightbtn">
                <Row
                  align="middle"
                  justify="center"
                  style={{
                    height: "100%",
                    width: "100%",
                    padding: "0px 5px",
                  }}
                >
                  <Image
                    style={{}}
                    width={20}
                    preview={false}
                    className="profile-image"
                    src={wifi}
                  />
                </Row>
                <Row
                  justify="center"
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Groot 5G
                </Row>
              </button>
            </Col>
          </Row>

          <Row
            align="middle"
            justify="space-between"
            style={{ width: "100%", marginTop: "50px" }}
          >
            <Image
              style={{}}
              width={20}
              preview={false}
              className="profile-image"
              src={wifi}
            />

            <Slider defaultValue={10} style={{ width: "85%" }} />
          </Row>
          <Row
            align="middle"
            justify="space-between"
            style={{ width: "100%", marginTop: "40px" }}
          >
            <Image
              style={{}}
              width={20}
              preview={false}
              className="profile-image"
              src={wifi}
            />

            <Slider defaultValue={10} style={{ width: "85%" }} />
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default WifiSoundBtry;
