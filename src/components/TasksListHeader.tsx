import { profile } from "../assets";

export default function TasksListHeader() {
  return (
    <div className="w-full h-32 shadow-2xl bg-blue-primary py-3 px-2 flex justify-start items-start gap-4">
      <div className="w-[55px] h-[50px] border-2 rounded-full">
        <img src={profile} className="w-full h-full object-cover" alt="" />
      </div>
      <div>
        <h2 className="font-medium text-white ">Hello, Jhon</h2>
        <p className="text-xl text-white font-thin">
          <em>What are your plans for today?</em>
        </p>
      </div>
    </div>
  );
}
