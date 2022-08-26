import { Row, Col, Image, Button, Modal } from "antd";
import "./taskbarstyle.css";
import React, { useEffect, useState } from "react";
import { useBattery } from "react-use";
import excellogo from "../assets/Taskbar/excel-logo.png";
import folder from "../assets/Taskbar/folder.png";
import MicrosoftEdge from "../assets/Taskbar/Microsoft-Edge.png";
import store from "../assets/Taskbar/store.png";
import windows11 from "../assets/Taskbar/home.png";
import word from "../assets/Taskbar/winWord.png";
import figma from "../assets/Taskbar/figma.png";
import settings from "../assets/Taskbar/settings.png";
import upper from "../assets/Icon/upper.png";
import wifi from "../assets/Icon/wifi.png";
import wifioff from "../assets/Icon/wifioff.png";
import sound from "../assets/Icon/sound.png";
import battery from "../assets/Icon/fa_battery.png";
import batterycharge from "../assets/Icon/chargingbatry.png";
import moon from "../assets/Icon/moon.png";
import moment from "moment";
import DeskTop from "../desktop/desktop";
import StartWindow from "../components/StartWindow/startwindow";
import WifiSoundBtry from "../components/wifisountbattery/wifisoundbtry";
import SettingPage from "../screens/Settings/settings";

function TaskBar() {
  // battery funcation
  const batteryState = useBattery();
  const [ischarging, setIscharging] = useState();
  const [isSetting, setIssetting] = useState(false);
  function settingbtnclick() {
    setIssetting(!isSetting);
    setWbtnclick(false);
  }

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
  const startButtonClick = () => {
    console.log("hello");
  };
  // modal end
  // windows btn
  const [iswbtnclick, setWbtnclick] = useState(false);
  function Wbtnclick() {
    setWbtnclick(!iswbtnclick);
    console.log(iswbtnclick);
  }

  //windows btn nd
  // on right click

  function OnLeftClick() {
    setWbtnclick(false);
    setIswificlick(false);
  }
  // on right click end
  useEffect(() => {
    document.getElementById("desktop").addEventListener("click", OnLeftClick);
  });

  // wifi section
  const [iswificlick, setIswificlick] = useState(false);
  const Onwificlick = () => {
    console.log("Wifi click", iswificlick);
    setIswificlick(!iswificlick);
  };
  const [isExcelClick, SetIsExcelClick] = useState(false);
  function ExcelClick() {
    SetIsExcelClick(!isExcelClick);
  }
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
      {iswbtnclick && <StartWindow />}
      {iswificlick && <WifiSoundBtry />}
      {isSetting && <SettingPage />}
      <Row align="middle" justify="center" className="task-bar">
        <button className="taskbar-icon" onClick={Wbtnclick}>
          <Image
            width={iconsize}
            preview={false}
            className="profile-image"
            src={windows11}
          />
        </button>
        <button className="taskbar-icon" onClick={ExcelClick}>
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
            src={store}
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
        <button className="taskbar-icon" onClick={settingbtnclick}>
          <Image
            width={iconsize}
            preview={false}
            className="profile-image"
            src={settings}
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
          <button className="taskbar-icon" onClick={Onwificlick}>
            <Row
              align="middle"
              justify="space-between"
              style={{ width: "90px", height: "20px", padding: "0px 5px" }}
            >
              {isonline ? (
                <Image width={16} preview={false} src={wifi} />
              ) : (
                <Image width={16} preview={false} src={wifioff} />
              )}
              <Image width={16} preview={false} src={sound} />

              {ischarging ? (
                <Image width={16} preview={false} src={batterycharge} />
              ) : (
                <Image width={16} preview={false} src={battery} />
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
