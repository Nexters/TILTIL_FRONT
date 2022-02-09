import React from 'react';

const CancelIcon: React.VFC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7" stroke="#22211F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 17L7 7" stroke="#22211F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CancelIcon;
