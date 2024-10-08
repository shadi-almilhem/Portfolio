import React from "react";

// Modify these
const MAIN_CIRCLE_SIZE = 30;
const MAIN_CIRCLE_OPACITY = 0.05;
const NUM_CIRCLES = 6;

const RippleComponent = ({ color }: any) => {
  return (
    <div className="absolute left-1/2 top-1/2 -z-10  overflow-visible">
      {Array.from({ length: NUM_CIRCLES }, (_, i) => (
        <div
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full `}
          style={{
            width: MAIN_CIRCLE_SIZE + i * 10,
            height: MAIN_CIRCLE_SIZE + i * 10,
            opacity: MAIN_CIRCLE_OPACITY - i * 0.01,
            animationDelay: `${i * 0.06}s`,
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
};

const Ripple = React.memo(RippleComponent);
export default Ripple;
