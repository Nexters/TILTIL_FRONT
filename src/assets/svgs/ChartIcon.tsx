import React from 'react';

const ChartIcon: React.VFC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 10V16" stroke="#2C75D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8V16" stroke="#2C75D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="#2C75D8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 13L8 16" stroke="#2C75D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ChartIcon;
