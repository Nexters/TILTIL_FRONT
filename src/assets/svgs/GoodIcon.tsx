import React from 'react';

const FireIcon: React.VFC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="4" fill="#5FEAD2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5061 14.2092C13.1801 14.5754 13 15.0487 13 15.539V25C13 26.1046 13.8954 27 15 27H24.0346C24.9961 27 25.8215 26.3158 25.9999 25.3711L27.5523 17.1488C27.7848 15.9173 26.8403 14.7778 25.587 14.7778H19.9231L21.7771 9.42182C22.0357 8.67471 21.6934 7.85238 20.9811 7.5094C20.3548 7.20786 19.6045 7.3579 19.1424 7.8771L13.5061 14.2092Z"
        fill="white"
      />
      <path d="M10 25V17" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
};

export default FireIcon;
