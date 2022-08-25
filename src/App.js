import "./App.css";
import "antd/dist/antd.css";
import DemoScreen from "./demos/demos";
import TaskBar from "./layout/taskbar";
import DeskTop from "./desktop/desktop";
import StartWindow from "./components/StartWindow/startwindow";
import Demo from "./demos/demos";
function App() {
  return (
    <>
      {/* <DemoScreen /> */}
      {/* <TaskBar /> */}
      {/* <DeskTop /> */}
      <Demo />
      {/* <StartWindow/> */}
    </>
  );
}

export default App;
