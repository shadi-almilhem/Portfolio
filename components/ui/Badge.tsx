import { BadgeCheck } from "lucide-react";

function Badge({ text, color }: any) {
  return (
    <div className="flex flex-row items-center">
      <BadgeCheck color={color} />
      <p className="ml-2 text-white/90">{text}</p>
    </div>
  );
}
export default Badge;
