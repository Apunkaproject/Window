import { Col, Row, Image, Input, message } from "antd";
import { useState } from "react";
import profilepic from "../../assets/oobe/profil.png";
import DeskTop from "../../desktop/desktop";
function Login() {
  const [enterpwd, setpwd] = useState("");
  const pwd = 7033;
  const [isUsertrue, setIsusertrue] = useState(false);
  const error = () => {
    message.error("This is an error message");
  };
  function pwdHandle(s) {
    console.log(s.target.value);
    setpwd(Number(s.target.value));
    if (enterpwd === pwd) {
      setIsusertrue(true);
      console.log("login done");
      console.log(typeof pwd);
      console.log(typeof enterpwd);
    } else {
      error();
    }
  }

  return (
    <>
      {isUsertrue ? (
        <DeskTop />
      ) : (
        <Row
          justify="center"
          align="middle"
          className="Loginbg"
          style={{ height: "100%", width: "100%", backgroundColor: "gray" }}
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
              <Input
                className="loginpwd"
                placeholder="Enter Password"
                onChange={pwdHandle}
              />
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
