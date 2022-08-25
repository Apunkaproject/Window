import "./App.css";
import "antd/dist/antd.css";
import DemoScreen from "./demos/demos";
import TaskBar from "./layout/taskbar";
import DeskTop from "./desktop/desktop";
import StartWindow from "./components/StartWindow/startwindow";
function App() {
  return (
    <>
      {/* <DemoScreen /> */}
      {/* <TaskBar /> */}
      <DeskTop />
      {/* <StartWindow/> */}
    </>
  );
}

export default App;
