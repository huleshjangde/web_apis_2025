'use client';
import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  color: string;
  text: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ color, text }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed z-50 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full transition-colors duration-200 ${color}`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}>
      <span className="text-sm text-white">{text}</span>
    </div>
  );
};

export default CustomCursor;
