import { Icons } from "../icons";
import GoPro from "./GoPro";
import Task from "./Task";
import TasksListHeader from "./TasksListHeader";

interface ITaskList {
  tasks: {
    id: number;
    name: string;
    completed: boolean;
  }[];
  toggleTaskStatus: (task_id: number) => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTask: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function TaskList({
  tasks,
  toggleTaskStatus,
  setName,
  setSelectedTask,
}: ITaskList) {
  return (
    <div className="w-[29vw] fixed left-0 top-0 h-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25);]">
      <TasksListHeader />
      <GoPro />

      <div className="w-full  h-full bg-grey-primary p-3 overflow-y-scroll">
        {tasks?.map((task, _index) => (
          <Task
            task={task}
            toggleTaskStatus={toggleTaskStatus}
            setName={setName}
            setSelectedTask={setSelectedTask}
          />
        ))}

        <div
          className="w-[60px] bg-blue-primary flex justify-center items-center border-2 cursor-pointer border-[#123EB1] absolute right-4 bottom-4 rounded-full h-[61px]  mt-28"
        >
          <Icons.plus/>
        </div>
      </div>
    </div>
  );
}
