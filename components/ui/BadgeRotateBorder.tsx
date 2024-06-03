export function BadgeRotateBorder({ text }: any) {
  return (
    <div className="mr-3 inline-flex animate-shine items-center justify-center rounded-full border border-white/85 bg-[linear-gradient(110deg,#323232,45%,#1e2631,55%,#323232)]  bg-[length:200%_100%] px-3 py-1 text-xs font-light tracking-wide text-white/85 transition-colors ">
      {text}
    </div>
  );
}
