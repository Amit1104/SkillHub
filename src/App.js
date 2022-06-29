import Home from "./pages/Home";
import Input from "./pages/Input";
import Taskbar from "./pages/Taskbar";

function App() {
  const data = [
    { id: "1", task: "task1", desc: "desc1", priority: "high" },
    { id: "2", task: "task2", desc: "desc2", priority: "medium" },
    { id: "3", task: "task3", desc: "desc3", priority: "low" },
    { id: "4", task: "task4", desc: "desc4", priority: "high" }
  ]
  return (
    <>
      {/* <Taskbar /> */}
      <Home todos={data} />
      {/* <Input /> */}
    </>
  );
}

export default App;
