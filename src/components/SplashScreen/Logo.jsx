import React from 'react';

const VadlaAnilCharyLogo = ({ width = '400', height = 90, className = " " }) => {
  return (
    <svg 
      viewBox="0 0 300 120" 
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#2563eb", stopOpacity:1}} />
          <stop offset="50%" style={{stopColor:"#7c3aed", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#dc2626", stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#8b5cf6", stopOpacity:1}} />
        </linearGradient>
      </defs>
      
      <circle cx="35" cy="60" r="25" fill="url(#iconGradient)" opacity="0.1"/>
      
      <g transform="translate(35, 60)">
        <path d="M -15 -12 L -5 8 L 0 -2 L 5 8 L 15 -12 L 8 -12 L 2 2 L -2 2 L -8 -12 Z" 
              fill="url(#iconGradient)" opacity="0.8"/>
        <rect x="-2" y="-8" width="4" height="3" fill="url(#iconGradient)"/>
        <path d="M 8 5 Q 12 8 8 11 Q 4 8 8 5" fill="url(#iconGradient)" opacity="0.6"/>
      </g>
      
      <text x="75" y="45" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="url(#textGradient)">
        VADLA ANIL CHARY
      </text>
      
      <text x="75" y="70" fontFamily="Arial, sans-serif" fontSize="11" fill="#6b7280" letterSpacing="2px">
        PORTFOLIO
      </text>
      
      <rect x="75" y="75" width="150" height="2" fill="url(#textGradient)" opacity="0.3" rx="1"/>
      
      
    </svg>
  );
};

export default VadlaAnilCharyLogo;