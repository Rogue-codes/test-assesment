import React from "react";
import { Icons } from "../icons";

interface ITask {
  task: {
    id: number;
    name: string;
    completed: boolean;
  };
  toggleTaskStatus: (task_id: number) => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTask: React.Dispatch<React.SetStateAction<number | null>>
}
export default function Task({ task, toggleTaskStatus, setName, setSelectedTask }: ITask) {
  const handleEdit = () => {
    setName(task.name);
    setSelectedTask(task.id)
  };
  return (
    <div
      className="w-full h-24 mb-3 bg-white shadow-md flex justify-between items-center px-6 rounded-md"
      key={task.id}
    >
      <div className="flex justify-start items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full border cursor-pointer border-[#071D55] flex justify-center items-center ${
            task.completed && "bg-green-primary"
          }`}
          onClick={() => toggleTaskStatus(task.id)}
        >
          {task.completed && <Icons.check />}
        </div>
        <p
          className={`${
            task.completed ? "line-through text-[#8D8D8D]" : "#071D55"
          }`}
        >
          {task.name}
        </p>
      </div>

      <button
        className="w-[51px] h-[45px] border border-[#071D55] text-[#071D55] rounded-[4px]"
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
}
