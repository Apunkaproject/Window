import { Row, Image } from "antd";
import "./Settingstyle.css";
import minimize from "../../assets/ui/minimize.png";
import maximize from "../../assets/ui/maximize.png";
import close from "../../assets/ui/close.png";
import file from "../../assets/win/50.png";

function SettingPage() {
  return (
    <>
      <Row className="windowsapp" style={{ width: "100%", }}>
        <Row
          align="middle"
          justify="space-between"
          className="menu-bar"
          style={{ width: "100%" }}
        >
          <Row>
            <Image width={15} preview={false} src={file} />
            <Row style={{ marginLeft: "5px" }}>Application name</Row>
          </Row>
          <Row>
            <button className="minimize">
              <Image width={15} preview={false} src={minimize} />
            </button>
            <button className="minimize">
              <Image width={15} preview={false} src={maximize} />
            </button>
            <button className="minimize">
              <Image width={15} preview={false} src={close} />
            </button>
          </Row>
        </Row>
      </Row>
    </>
  );
}
export default SettingPage;
