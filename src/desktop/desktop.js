import { Row, Col, Image, Button, Modal } from "antd";
import { useState } from "react";
import TaskBar from "../layout/taskbar";
import viewlogo from "../assets/desktop/rightclick/view.png";
import Draggable from "react-draggable";
import view from "../assets/ui/view.png";
import shortby from "../assets/ui/sort.png";
import refresh from "../assets/ui/refresh.png";
import paste from "../assets/ui/paste.png";
import New from "../assets/ui/new.png";
import Dpset from "../assets/ui/display.png";
import personalize from "../assets/ui/personalize.png";
import openin from "../assets/ui/openin.png";
import more from "../assets/ui/more.png";
import destop from "../assets/desktop/icon/destop.png";
import network from "../assets/desktop/icon/network.png";
import reciclebin from "../assets/desktop/icon/reciclebin.png";
import corme from "../assets/desktop/icon/corme.png";
import dstpfolder from "../assets/desktop/icon/dstpfolder.png";
import name from "../layout/taskbar";
import "./desktop.css";
import StartWindow from "../components/StartWindow/startwindow";

function DeskTop(props) {
  const [isRightClick, setIsRightClick] = useState(false);
  const handleContextMenu = (e) => {
    e.preventDefault();
    setIsRightClick(!isRightClick);
    // setTimeout(() => setIsRightClick(false), 250);s
    console.log(isRightClick);
  };

  const desktopfolder = [
    {
      folderName: "Desktop",
      icon: destop,
    },
    {
      folderName: "Desktop",
      icon: network,
    },
    {
      folderName: "Desktop",
      icon: reciclebin,
    },
    {
      folderName: "Desktop",
      icon: corme,
    },
    {
      folderName: "Desktop",
      icon: dstpfolder,
    },
  ];
  const rightclickMenus = [
    {
      lable: "View",
      icon: view,
    },
    {
      lable: "Short By",
      icon: shortby,
    },
    {
      lable: "Refrash",
      icon: refresh,
    },
    {
      lable: "Paste",
      icon: paste,
    },
    {
      lable: "New",
      icon: New,
    },
    {
      lable: "Display settings",
      icon: Dpset,
    },
    {
      lable: "Persinalize",
      icon: personalize,
    },
    {
      lable: "Open in terminal",
      icon: openin,
    },
    {
      lable: "Show more Options",
      icon: more,
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
          {isRightClick && (
            <Col
              className="onrightclick"
              style={{
                width: "300px",
                // height: "350px",
              }}
            >
              {rightclickMenus.map((e) => (
                <button className="rightbtn">
                  <Row
                    className="rightbtninner"
                    align="middle"
                    // justify="center"
                    style={{
                      width: "100%",
                      height: "30px",
                      //   backgroundColor: "gray",
                    }}
                  >
                    <div>
                      <Image
                        style={{ marginLeft: "5px" }}
                        width={15}
                        preview={false}
                        className="profile-image"
                        src={e.icon}
                      />
                    </div>
                    <div style={{ marginLeft: "15px" }}>{e.lable}</div>
                  </Row>
                </button>
              ))}
            </Col>
          )}
          {desktopfolder.map((e) => (
            <Draggable>
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
            </Draggable>
          ))}

          {/* <StartWindow /> */}
          {}
        </Col>

        <TaskBar />
      </Row>
    </>
  );
}
export default DeskTop;
