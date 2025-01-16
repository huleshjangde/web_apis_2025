'use client';
import React, { useEffect, useRef } from 'react';

interface PhoneNumberListProps {
  data: Record<string, string[]>;
  setActiveAlphabet: (alphabet: string) => void;
}

const PhoneNumberList: React.FC<PhoneNumberListProps> = ({
  data,
  setActiveAlphabet,
}) => {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // console.log("=== All entries being observed ===");
        // entries.forEach((entry) => {
        //   console.log(entry.target.getAttribute("data-alphabet"), entry.isIntersecting);
        // });

        const visibleSection = entries.find((entry) => entry.isIntersecting);
        // console.log("=== Visible Section ===", visibleSection);

        if (visibleSection) {
          const alphabet = visibleSection.target.getAttribute('data-alphabet');
          //   console.log("=== Active Alphabet ===", alphabet);
          setActiveAlphabet(alphabet || '');
        }
      },
      { rootMargin: '0px', threshold: 0.0 },
    );

    // Observe all sections
    Object.entries(sectionsRef.current).forEach(([alphabet, section]) => {
      if (section) {
        // console.log(`Observing section: ${alphabet}`, section);
        observer.observe(section);
      } else {
        // console.error(`Section not found for: ${alphabet}`);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveAlphabet]);

  return (
    <div className="ml-20">
      {Object.entries(data).map(([alphabet, phoneNumbers]) => (
        <div
          key={alphabet}
          ref={(el) => {
            sectionsRef.current[alphabet] = el;
          }}
          data-alphabet={alphabet}
          className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">{alphabet}</h2>
          <ul className="space-y-2">
            {phoneNumbers.map((number, index) => (
              <li key={index} className="text-gray-700">
                {number}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PhoneNumberList;
