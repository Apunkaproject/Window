import { Row, Col, Image, Button, Modal } from "antd";
import { useState } from "react";
import TaskBar from "../layout/taskbar";
import viewlogo from "../assets/desktop/rightclick/view.png";
import Draggable from "react-draggable";
import "./desktop.css";

function DeskTop() {
  const [isRightClick, setIsRightClick] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();

    setIsRightClick(true);

    setTimeout(() => setIsRightClick(false), 250);
    console.log(isRightClick);
  };

  return (
    <>
      <Row
        onContextMenu={handleContextMenu}
        className="desk-top"
        style={{ width: "100%", height: "100%" }}
      >
        <Col style={{ width: "100%", height: "100%" }}>
          <Draggable>
            {/* <Col
              className="onrightclick"
              style={{
                width: "300px",
                height: "350px",
              }}
            >
              <button className="rightbtn">
                <Row
                  className="rightbtninner"
                  align="middle"
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
                      src={viewlogo}
                    />
                  </div>
                  <div style={{ marginLeft: "15px" }}>View</div>
                </Row>
              </button>
            </Col> */}

            <div
              style={{
                backgroundColor: "white",
                width: "100px",
                height: "100px",
                margin: "10px",
              }}
            >
              sds
            </div>
          </Draggable>
          <Draggable>
            <div
              style={{
                backgroundColor: "white",
                width: "100px",
                height: "100px",
                margin: "10px",
              }}
            >
              sds
            </div>
          </Draggable>

          <TaskBar />
        </Col>
      </Row>
    </>
  );
}
export default DeskTop;
