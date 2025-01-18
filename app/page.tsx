'use client';
import CustomCursor from '@/components/CustomCursor';
import React, { useState } from 'react';

const CursorWrapper: React.FC = () => {
  const [cursorColor, setCursorColor] = useState(
    'bg-gradient-to-r from-pink-500 to-yellow-500',
  );
  const [cursorText, setCursorText] = useState('');

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget.getBoundingClientRect();
    const entryFromLeft =
      event.clientX - target.left < target.right - event.clientX;
    console.log(
      'clientX',
      event.clientX,
      'T-left: ',
      target.left,
      'T-right: ',
      target.right,
      'entryFromLeft: ',
      entryFromLeft,
    );

    if (entryFromLeft) {
      setCursorColor('bg-gradient-to-r from-green-500 to-blue-500');
      setCursorText('From Left');
    } else {
      setCursorColor('bg-gradient-to-r from-red-500 to-purple-500');
      setCursorText('From Right');
    }
  };

  const handleMouseLeave = () => {
    setCursorColor('bg-gradient-to-r from-pink-500 to-yellow-500');
    setCursorText('');
  };

  return (
    <div>
      <CustomCursor color={cursorColor} text={cursorText} />
      <div
        className="mx-auto my-20 flex h-64 w-64 items-center justify-center bg-gray-200"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        Hover over this box
      </div>
    </div>
  );
};

export default CursorWrapper;
