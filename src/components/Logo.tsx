import React from 'react';

export default function Logo({ className = '', style = {}, showText = true, ...props }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`} style={style} {...props}>
      {/* Icon */}
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-sm"></div>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Digital
          </span>
          <span className="text-sm font-medium text-gray-300 -mt-1">
            Works
          </span>
        </div>
      )}
    </div>
  );
} 