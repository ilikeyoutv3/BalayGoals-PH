import React from 'react';

export const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <button className={`rounded px-4 py-2 font-semibold ${className}`}>
      {children}
    </button>
  );
};
