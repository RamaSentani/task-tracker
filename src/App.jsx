import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Ayaya",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "asdsdf",
      day: "Feb 1th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "asd",
      day: "Feb 2th at 2:30pm",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
