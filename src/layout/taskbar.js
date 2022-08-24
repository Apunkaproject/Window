import { Row, Image, Button } from "antd";
import "./taskbarstyle.css";
import excellogo from "../assets/Taskbar/excel-logo.png";
import folder from "../assets/Taskbar/folder.png";
import MicrosoftEdge from "../assets/Taskbar/Microsoft-Edge.png";
// import Notepad from "../assets/Taskbar/Notepad.png";
import windows11 from "../assets/Taskbar/windows11.png";
import Word from "../assets/Taskbar/Word.png";
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
              src={Word}
            />
          </button>
          <div className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={MicrosoftEdge}
            />
          </div>
          <button className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={folder}
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
        </Row>
      </Row>
    </>
  );
}
export default TaskBar;
