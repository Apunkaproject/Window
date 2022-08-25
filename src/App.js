import "./App.css";
import "antd/dist/antd.css";
import DemoScreen from "./demos/demos";
import TaskBar from "./layout/taskbar";
import DeskTop from "./desktop/desktop";
import StartWindow from "./components/StartWindow/startwindow";
import Demo from "./demos/demos";
import LockScreen from "./screens/LockScreen/lockscreen";
import Login from "./screens/LockScreen/login";
function App() {
  return (
    <>
      {/* <DemoScreen /> */}
      {/* <TaskBar /> */}
      {/* <DeskTop /> */}
      {/* <Demo /> */}
      {/* <StartWindow/> */}
      {/* <LockScreen /> */}
      <Login />
    </>
  );
}

export default App;
