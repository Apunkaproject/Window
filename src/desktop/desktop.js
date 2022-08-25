import { Row, Col, Image, Button, Modal } from "antd";
import { useState } from "react";
import TaskBar from "../layout/taskbar";
import viewlogo from "../assets/desktop/rightclick/view.png";
import Draggable from "react-draggable";
import view from "../assets/ui/view.png";
import "./desktop.css";

function DeskTop() {
  const [isRightClick, setIsRightClick] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();

    setIsRightClick(!isRightClick);

    // setTimeout(() => setIsRightClick(false), 250);
    console.log(isRightClick);
  };
  const desktopfolder = [
    {
      folderName: "Desktop",
      icon: view,
    },
    {
      folderName: "Desktop",
      icon: view,
    },
    {
      folderName: "Desktop",
      icon: view,
    },
    {
      folderName: "Desktop",
      icon: view,
    },
    {
      folderName: "Desktop",
      icon: view,
    },
  ];
  const rightclickMenus = [
    {
      lable: "View",
      icon: view,
    },
    {
      lable: "Short By",
      icon: view,
    },
    {
      lable: "Refrash",
    },
    {
      lable: "New",
    },
    {
      lable: "Display settings",
    },
    {
      lable: "Persinalize",
    },
    {
      lable: "Open in terminal",
    },
    {
      lable: "Show more Options",
    },
  ];
  return (
    <>
      <Row
        onContextMenu={handleContextMenu}
        className="desk-top"
        style={{ width: "100%", height: "100%" }}
      >
        <Col style={{ width: "100%", height: "100%" }}>
          {desktopfolder.map((e) => (
            <Row
              className="desktop-folder"
              align="middle"
              justify="center"
              style={{
                margin: "10px",
                padding: "5px",
                width: "80px",
                height: "80px",
                // backgroundColor: "white",
                borderRadius: "5px",
              }}
            >
              <Col>
                <Row
                  justify="center"
                  style={{
                    width: "100%",
                  }}
                >
                  <Image style={{}} width={30} preview={false} src={e.icon} />
                </Row>

                <Row
                  justify="center"
                  style={{
                    width: "100%",
                    fontSize: "10px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  {e.folderName}
                </Row>
              </Col>
            </Row>
          ))}
        </Col>
        <TaskBar />
      </Row>
    </>
  );
}
export default DeskTop;
