import { BadgeCheck } from "lucide-react";

function Badge({ text, color }: any) {
  return (
    <div className="  flex w-full flex-row items-center ">
      <BadgeCheck className="mr-2 inline-block" color={color} />

      <p className=" w-full flex-row text-start text-white/90">{text}</p>
    </div>
  );
}
export default Badge;
