import { BadgeCheck } from "lucide-react";

function Badge({ text, color }: any) {
  return (
    <div className=" mx-auto flex w-full flex-row items-center ">
      <p className=" w-full flex-row text-start text-white/90">
        <BadgeCheck className="mr-2 inline-block" color={color} />
        {text}
      </p>
    </div>
  );
}
export default Badge;
