import React from 'react';

const DeleteIcon: React.VFC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 11V17" stroke="#777680" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11V17" stroke="#777680" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 7H20" stroke="#777680" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 7V6C5.44772 6 5 6.44772 5 7H6ZM18 7H19C19 6.44772 18.5523 6 18 6V7ZM17 7V18H19V7H17ZM15 20H9V22H15V20ZM7 18V7H5V18H7ZM6 8H12V6H6V8ZM12 8H18V6H12V8ZM9 20C7.89543 20 7 19.1046 7 18H5C5 20.2091 6.79086 22 9 22V20ZM17 18C17 19.1046 16.1046 20 15 20V22C17.2091 22 19 20.2091 19 18H17Z"
        fill="#777680"
      />
      <path
        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
        stroke="#777680"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
