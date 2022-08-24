import { Row, Image, Button } from "antd";
import "./taskbarstyle.css";
import excellogo from "../assets/Taskbar/excel-logo.png";
import folder from "../assets/Taskbar/folder.png";
import MicrosoftEdge from "../assets/Taskbar/Microsoft-Edge.png";
import Notepad from "../assets/Taskbar/Notepad.png";
import windows11 from "../assets/Taskbar/windows11.png";
import word from "../assets/Taskbar/word.png";
import figma from "../assets/Taskbar/figma.png";
import vscode from "../assets/Taskbar/vscode.png";
function TaskBar() {
  return (
    <>
      <Row
        align="middle"
        justify="center"
        style={{ width: "100%", height: "100%", backgroundColor: "gray" }}
      >
        <Row align="middle" justify="center" className="task-bar">
          <button className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={windows11}
            />
          </button>
          <button className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={excellogo}
            />
          </button>
        
          <button className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={MicrosoftEdge}
            />
          </button>
          <button className="taskbar-icon">
            <Image
              width={32}
              preview={false}
              className="profile-image"
              src={Notepad}
            />
          </button>
          <button className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={word}
            />
          </button>
          <button className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={figma}
            />
          </button>
          <button className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={vscode}
            />
          </button>
        </Row>
      </Row>
    </>
  );
}
export default TaskBar;
