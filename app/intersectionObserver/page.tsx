'use client';
import AlphabetSidebar from '@/components/AlphabetSidebar';
import PhoneNumberList from '@/components/PhoneNumberList';
import { data } from '@/data';
import { useEffect, useState } from 'react';

const Home = () => {
  const [activeAlphabet, setActiveAlphabet] = useState('');
  useEffect(() => {
    // console.log('=================activeAlphabet===================');
    // console.log(activeAlphabet);
    // console.log('====================================');
  }, [activeAlphabet]);

  return (
    <div className="flex">
      <AlphabetSidebar
        alphabets={Object.keys(data)}
        activeAlphabet={activeAlphabet}
      />
      <PhoneNumberList data={data} setActiveAlphabet={setActiveAlphabet} />
    </div>
  );
};

export default Home;
