import { useState } from "react";
import Createtask from "./components/Createtask";
import TaskList from "./components/TaskWrapper";

function App() {
  const [tasks, setTasks] = useState<
    { id: number; name: string; completed: boolean }[]
  >([]);

  const [name, setName] = useState("");
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const handleAddTask = (name: string) => {
    const newTask = {
      id: Date.now(),
      name: name,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setName("");
  };

  console.log("task: ===>", tasks);

  const toggleTaskStatus = (task_id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === task_id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleEditTask = (task_id: number, newName: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === task_id) {
        return {
          ...task,
          name: newName,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
    setName("");
    setSelectedTask(null);
  };

  return (
    <div className="w-full h-screen overflow-y-scroll flex justify-center items-center">
      <TaskList
        tasks={tasks}
        setSelectedTask={setSelectedTask}
        toggleTaskStatus={toggleTaskStatus}
        setName={setName}
      />
      <Createtask
        handleAddTask={handleAddTask}
        name={name}
        setName={setName}
        selectedTask={selectedTask}
        handleEditTask={handleEditTask}
      />
    </div>
  );
}

export default App;
