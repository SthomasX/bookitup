import React from 'react';

export function Card({ children, className }) {
  return (
    <div className={`rounded-xl bg-white/5 backdrop-blur p-2 shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
