import { Row, Col, Image } from "antd";
import "./startwindow.css";
import { Input } from "antd";
import edge from "../../assets/Taskbar/edge.png";
import word from "../../assets/desktop/icon/word.png";
import code from "../../assets/desktop/icon/code.png";
import excel from "../../assets/desktop/icon/excel.png";
import dstpfolder from "../../assets/desktop/icon/dstpfolder.png";
import figma from "../../assets/desktop/icon/figma.png";
import music from "../../assets/desktop/icon/music.png";
import store from "../../assets/desktop/icon/store.png";
import oneNote from "../../assets/desktop/icon/oneNote.png";
import powerpoint from "../../assets/desktop/icon/powerpoint.png";
import Notepad from "../../assets/desktop/icon/Notepad.png";
import video from "../../assets/desktop/icon/vid.png";
import corme from "../../assets/desktop/icon/corme.png";

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
                    <Image width={iconsize} preview={false} src={edge} />
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
                    Word
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
                    VS Code
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
                    Excel
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
                    Folder
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
                    Figma
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
                    Music
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
                    Microsoft Store
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
                    One Note
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
                    Power Point
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
                    Notepad
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
                    Video
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
                    <div style={{ fontSize: "15px" }}>Word</div>
                    <div style={{ fontSize: "13px" }}>Recently Added</div>
                  </Col>
                </Row>
                <Row
                  className="Recommandedapp"
                  style={{ padding: "10px", marginBottom: "10px" }}
                >
                  <Image width={iconsize} preview={false} src={edge} />
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
                    <div style={{ fontSize: "15px" }}>Figma</div>
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
                    <div style={{ fontSize: "15px" }}>Notepad</div>
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
                    <div style={{ fontSize: "15px" }}>Power Point</div>
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
                    <div style={{ fontSize: "15px" }}>Corem</div>
                    <div style={{ fontSize: "13px" }}>Recently Added</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {/* recommandded */}

          {/* profile section  */}
          <Row
            // align="middle"
            justify="space-between"
            className="profilesect"
            style={{ width: "100%", padding: "20px" }}
          >
            <Row>
              <Row align="middle">
                <Image width={30} preview={false} src={edge} />
              </Row>
              <Row align="middle">
                <div style={{ marginLeft: "10px" }}>Nitish Kumar</div>
              </Row>
            </Row>
            <Row align="middle" justify="space-between">
              <button className="profilemorebtn">
                <Image width={20} preview={false} src={edge} />
              </button>
              <button className="profilemorebtn">
                <Image width={20} preview={false} src={edge} />
              </button>
              <button className="profilemorebtn">
                <Image width={20} preview={false} src={edge} />
              </button>
              <button className="profilemorebtn">
                <Image width={20} preview={false} src={edge} />
              </button>
              <button className="profilemorebtn">
                <Image width={20} preview={false} src={edge} />
              </button>
            </Row>
          </Row>
          {/* end profile section  */}
        </Col>
      </Row>
    </>
  );
}
export default StartWindow;
