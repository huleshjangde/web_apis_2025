'use client';
import React from 'react';

interface AlphabetSidebarProps {
  alphabets: string[];
  activeAlphabet: string;
}

const AlphabetSidebar: React.FC<AlphabetSidebarProps> = ({
  alphabets,
  activeAlphabet,
}) => {
  return (
    <div className="fixed left-4 top-20 flex flex-col space-y-2">
      {alphabets.map((letter) => (
        <div
          key={letter}
          className={`text-xl font-bold ${activeAlphabet === letter ? 'text-blue-600' : 'text-gray-500'}`}>
          {letter}
        </div>
      ))}
    </div>
  );
};

export default AlphabetSidebar;
