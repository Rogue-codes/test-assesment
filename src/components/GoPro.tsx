import { trophy } from "../assets";

export default function GoPro() {
  return (
    <div className="w-full h-28 bg-lemon-primary relative flex justify-start items-center gap-5 px-6">
      <div>
        <img src={trophy} alt="" />
      </div>
      <p className="text-[#071D55] font-bold">Go Pro Upgrade Now</p>
      <div className="w-[66px] h-[71px] flex justify-center items-center text-[#F2C94C] bg-[#071D55] absolute top-0 right-5">
        $1
      </div>
    </div>
  );
}
