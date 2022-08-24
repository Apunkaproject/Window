import { Row, Image } from "antd";
import "./taskbarstyle.css";
import excellogo from "../assets/Taskbar/excel-logo.png";
import folder from "../assets/Taskbar/folder.png";
import MicrosoftEdge from "../assets/Taskbar/Microsoft-Edge.png";
import Notepad from "../assets/Taskbar/Notepad.png";
import windows11 from "../assets/Taskbar/windows11.png";
import word from "../assets/Taskbar/word.png";
function TaskBar() {
  return (
    <>
      <Row
        align="middle"
        justify="center"
        style={{ width: "100%", height: "100%", backgroundColor: "gray" }}
      >
        <Row align="middle" justify="center" className="task-bar">
          <div className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={windows11}
            />
          </div>
          <div className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={MicrosoftEdge}
            />
          </div>
          <div className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={folder}
            />
          </div>
          <div className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={excellogo}
            />
          </div>
          <div className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={Notepad}
            />
          </div>
          <div className="taskbar-icon">
            <Image
              width={35}
              preview={false}
              className="profile-image"
              src={word}
            />
          </div>
        </Row>
      </Row>
    </>
  );
}
export default TaskBar;
