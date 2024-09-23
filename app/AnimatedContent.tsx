import React from "react";
import { useSprings, animated, SpringValue } from "react-spring";

interface AnimatedContentProps {
  items: {
    key: string;
    content: React.ReactNode;
  }[];
}

interface SpringStyles {
  opacity: SpringValue<number>;
  transform: SpringValue<string>;
  filter: SpringValue<string>;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ items }) => {
  const springs = useSprings(
    items.length,
    items.map((_, index) => ({
      from: { opacity: 0, transform: "translateY(30px)", filter: "blur(20px)" },
      to: { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" },
      delay: index * 180,
      config: { duration: 200 },
    })),
  );

  return (
    <>
      {springs.map((springStyle, index) => (
        <animated.div
          style={springStyle as SpringStyles}
          className="flex w-full flex-col items-center justify-center text-center"
          key={items[index].key}
        >
          {items[index].content}
        </animated.div>
      ))}
    </>
  );
};

export default AnimatedContent;
