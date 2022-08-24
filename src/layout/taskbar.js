import { Row, Col, Image, Button } from "antd";
import "./taskbarstyle.css";
import excellogo from "../assets/Taskbar/excel-logo.png";
import folder from "../assets/Taskbar/folder.png";
import MicrosoftEdge from "../assets/Taskbar/Microsoft-Edge.png";
import Notepad from "../assets/Taskbar/Notepad.png";
import windows11 from "../assets/Taskbar/windows11.png";
import word from "../assets/Taskbar/word.png";
import figma from "../assets/Taskbar/figma.png";
import vscode from "../assets/Taskbar/vscode.png";
import upper from "../assets/Icon/upper.png";
import wifi from "../assets/Icon/wifi.png";
import sound from "../assets/Icon/sound.png";
import fa_battery from "../assets/Icon/fa_battery.png";
import moon from "../assets/Icon/moon.png";

function TaskBar() {
  const iconsize = 28;
  return (
    <>
      <Row align="middle" justify="center" className="task-bar">
        <button className="taskbar-icon">
          <Image
            width={iconsize}
            preview={false}
            className="profile-image"
            src={windows11}
          />
        </button>
        <button className="taskbar-icon">
          <Image
            width={iconsize}
            preview={false}
            className="profile-image"
            src={excellogo}
          />
        </button>

        <button className="taskbar-icon">
          <Image
            width={iconsize}
            preview={false}
            className="profile-image"
            src={MicrosoftEdge}
          />
        </button>
        <button className="taskbar-icon">
          <Image
            width={iconsize}
            preview={false}
            className="profile-image"
            src={Notepad}
          />
        </button>
        <button className="taskbar-icon">
          <Image
            width={iconsize}
            preview={false}
            className="profile-image"
            src={word}
          />
        </button>
        <button className="taskbar-icon">
          <Image
            width={iconsize}
            preview={false}
            className="profile-image"
            src={figma}
          />
        </button>
        <button className="taskbar-icon">
          <Image
            width={iconsize}
            preview={false}
            className="profile-image"
            src={vscode}
          />
        </button>
        <Row>
          <button className="taskbar-icon">
            <Image
              width={15}
              preview={false}
              className="profile-image"
              src={vscode}
            />
          </button>
          <button className="taskbar-icon">
            <Col>
              <div>ENG</div>
              <div>IN</div>
            </Col>
          </button>
          <button className="taskbar-icon">
            <Row>
              <Image
                width={15}
                preview={false}
                className="task-icon"
                src={vscode}
              />
              <Image
                width={15}
                preview={false}
                className="task-icon"
                src={vscode}
              />
              <Image
                width={15}
                preview={false}
                className="task-icon"
                src={vscode}
              />
            </Row>
          </button>
          <button className="taskbar-icon">
            <Col>
              <div>01:12 AM</div>
              <div>12/08/2002</div>
            </Col>
          </button>
        </Row>
      </Row>
    </>
  );
}
export default TaskBar;
