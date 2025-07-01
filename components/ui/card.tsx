import React from 'react';

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`bg-white rounded-2xl shadow p-4 ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={className}>{children}</div>;
};
