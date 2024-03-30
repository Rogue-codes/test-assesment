interface ICreateTask {
  handleAddTask: (name: string) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selectedTask: number | null;
  handleEditTask: (task_id: number, newName: string) => void;
}
export default function Createtask({
  handleAddTask,
  name,
  setName,
  selectedTask,
  handleEditTask,
}: ICreateTask) {
  console.log("selected id", selectedTask);
  const handleClick = () => {
    if (selectedTask) {
      handleEditTask(selectedTask, name);
    } else {
      handleAddTask(name);
    }
  };
  return (
    <div className="w-[71vw] ml-[29vw] h-full">
      <div className="w-full h-32 bg-blue-primary py-3 px-2 flex justify-center items-center">
        <p className="text-white">{selectedTask ? "Edit" : "Create"} Task</p>
      </div>

      <div className="w-full h-full p-5">
        <div>
          <p>Task Name</p>
          <input
            type="text"
            className="w-[37.2rem] focus:outline-none text-lg text-blue-primary px-4 h-16 border-2 rounded-[9px] mt-2 border-[#CBCBCB]"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-[71vw] left-[29vw] fixed bottom-0  pb-2 flex justify-start items-center gap-4 pl-4">
          <button
            className="w-32 h-[3.8rem] bg-[#AB3535] text-white rounded-md border-2 disabled:opacity-50 disabled:cursor-not-allowed border-[#720D0D]"
            disabled={!name}
            onClick={() => setName("")}
          >
            Delete
          </button>
          <button
            className="w-[27.25rem] h-[3.8rem] bg-blue-primary text-white rounded-md border-2 disabled:opacity-50 disabled:cursor-not-allowed border-[#0D2972]"
            onClick={handleClick}
            disabled={!name}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
