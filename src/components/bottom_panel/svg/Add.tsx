import React from "react";

const Add = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <rect width={256} height={256} fill="none" />
      <line
        x1={128}
        y1={40}
        x2={128}
        y2={216}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <line
        x1={40}
        y1={128}
        x2={216}
        y2={128}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  );
};

export default Add;