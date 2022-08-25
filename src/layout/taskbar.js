import { Row, Col, Image, Button, Modal } from "antd";
import "./taskbarstyle.css";
import React, { useEffect, useState } from "react";
import { useBattery } from "react-use";
import excellogo from "../assets/Taskbar/excel-logo.png";
import folder from "../assets/Taskbar/folder.png";
import MicrosoftEdge from "../assets/Taskbar/Microsoft-Edge.png";
import Notepad from "../assets/Taskbar/notepad.png";
import windows11 from "../assets/Taskbar/windows11.png";
import word from "../assets/Taskbar/word.jpg";
import figma from "../assets/Taskbar/figma.png";
import vscode from "../assets/Taskbar/vscode.png";
import upper from "../assets/Icon/upper.png";
import wifi from "../assets/Icon/wifi.png";
import wifioff from "../assets/Icon/wifioff.png";
import sound from "../assets/Icon/sound.png";
import battery from "../assets/Icon/fa_battery.png";
import batterycharge from "../assets/Icon/chargingbatry.png";
import moon from "../assets/Icon/moon.png";
import moment from "moment";

function TaskBar() {
  // battery funcation
  const batteryState = useBattery();
  const [ischarging, setIscharging] = useState();
  useEffect(() => {
    let timer = null;

    if (batteryState.charging) {
      console.log("battery is charging");
      setIscharging(true);
    } else {
      console.log("Battery not charging");
      setIscharging(false);
    }
  });
  // battery funcation end
  const iconsize = 24;
  const [isonline, setIsonline] = useState(true);
  const imonline = () => {
    setIsonline(true);
  };
  const imoffline = () => {
    setIsonline(false);
  };
  window.addEventListener("online", imonline);
  window.addEventListener("offline", imoffline);

  console.log(isonline);
  const HandleDate = () => {
    console.log("hello");
  };
  // modal start

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // modal end
  return (
    <>
      <Modal
        className="start-menu"
        // title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Row align="middle" justify="center" className="task-bar">
        <button className="taskbar-icon" onClick={showModal}>
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
        <Row className="right-side-tool">
          <button className="taskbar-icon">
            <Image width={15} preview={false} src={upper} />
          </button>
          <button className="taskbar-icon">
            <Col>
              <div style={{ padding: "0px", margin: "0px" }}>ENG</div>
              <div style={{ padding: "0px", marginTop: "0px" }}>IN</div>
            </Col>
          </button>
          <button className="taskbar-icon">
            <Row
              align="middle"
              justify="space-between"
              style={{ width: "90px", height: "20px", padding: "0px 5px" }}
            >
              {isonline ? (
                <Image width={20} preview={false} src={wifi} />
              ) : (
                <Image width={20} preview={false} src={wifioff} />
              )}
              <Image width={20} preview={false} src={sound} />

              {ischarging ? (
                <Image width={20} preview={false} src={batterycharge} />
              ) : (
                <Image width={20} preview={false} src={battery} />
              )}
            </Row>
          </button>
          <button className="taskbar-icon" onClick={HandleDate}>
            <Row align="middle" justify="center">
              <Col>
                <div>{moment().format("LT")}</div>
                <div> {moment().format("L")}</div>
              </Col>
              <Image
                width={15}
                preview={false}
                src={moon}
                style={{ marginLeft: "5px" }}
              />
            </Row>
          </button>
        </Row>
      </Row>
    </>
  );
}
export default TaskBar;
