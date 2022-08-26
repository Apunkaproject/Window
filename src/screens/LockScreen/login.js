import { Col, Row, Image, Input, message } from "antd";
import { useEffect, useState } from "react";
import profilepic from "../../assets/oobe/profil.png";
import DeskTop from "../../desktop/desktop";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
function Login() {
  const [enterpwd, setpwd] = useState("");
  const pwd = 7033;
  const [isUsertrue, setIsusertrue] = useState(false);
  const [isloading, setisloading] = useState(false);

  function pwdHandle(s) {
    console.log(s.target.value);
    setpwd(Number(s.target.value));
  }
  function pwdkey(e) {
    if (e.key === "Enter") {
      if (enterpwd === pwd) {
        setisloading(true);
        setTimeout(() => {
          setIsusertrue(true);
        }, 3000);
        console.log("login done");
        console.log(typeof pwd);
        console.log(typeof enterpwd);
      } else {
      }
    }
    console.log(e.key);
  }
  useEffect(() => {
    document.addEventListener("keydown", pwdkey, true);
  });
  return (
    <>
      {isUsertrue ? (
        <DeskTop />
      ) : (
        <Row
          justify="center"
          align="middle"
          className="Loginbg"
          style={{ height: "100%", width: "100%" }}
        >
          <Col span={5}>
            <Row
              justify="center"
              style={{
                width: "100%",
              }}
            >
              <Image
                width={200}
                preview={false}
                className="profile-image"
                src={profilepic}
              />
            </Row>
            <Row
              justify="center"
              style={{
                width: "100%",
                fontSize: "30px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Nitish Kumar
            </Row>
            <Row
              justify="center"
              style={{
                width: "100%",
                fontSize: "15px",
                fontWeight: "400",
                color: "white",
              }}
            >
              Nitishr833@gmail.com
            </Row>
            <Row
              justify="center"
              style={{
                marginTop: "15px",
                width: "100%",
                fontSize: "15px",
                fontWeight: "400",
                color: "white",
              }}
            >
              {isloading ? (
                <Player
                  autoplay
                  loop
                  src="https://assets6.lottiefiles.com/packages/lf20_usmfx6bp.json"
                  style={{ height: "100px", width: "100px" }}
                ></Player>
              ) : (
                <Input
                  autoFocus={true}
                  className="loginpwd"
                  placeholder="Enter Password"
                  onChange={pwdHandle}
                />
              )}
            </Row>
            <Row
              justify="center"
              style={{
                marginTop: "15px",
                width: "100%",
                fontSize: "15px",
                fontWeight: "400",
                color: "white",
              }}
            >
              Forgoten Password
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
}
export default Login;
