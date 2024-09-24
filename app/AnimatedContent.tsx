import React from "react";

interface AnimatedContentProps {
  items: {
    key: string;
    content: React.ReactNode;
  }[];
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={item.key}
          className={`animatedItem flex w-full flex-col items-center justify-center text-center`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {item.content}
        </div>
      ))}
    </>
  );
};

export default AnimatedContent;
