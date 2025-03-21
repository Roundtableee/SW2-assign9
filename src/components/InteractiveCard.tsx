'use client';

import React, { useState } from 'react';

interface InteractiveCardProps {
  /** 
   * If your test renders <InteractiveCard><span>Hello</span></InteractiveCard>,
   * we need children to display "Hello" text. 
   */
  children?: React.ReactNode;

  /** 
   * Old props for showing venue name and image 
   */
  venueName: string;
  imgSrc: string;
}

export default function InteractiveCard({
  children,
  venueName,
  imgSrc,
}: InteractiveCardProps) {
  // Hover state for changing card classes
  const [isHovered, setIsHovered] = useState(false);
  // Example toggle state for showing more details
  const [showMore, setShowMore] = useState(false);

  // Switch classes based on hover
  const cardClasses = isHovered
    ? 'shadow-2xl bg-neutral-200'
    : 'shadow-lg bg-white';

  return (
    <div
      className={`
        rounded-lg p-4 max-w-sm transition-colors duration-300
        ${cardClasses}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Display the venue image */}
      <img
        src={imgSrc}
        alt={venueName}
        className="w-full h-40 object-cover rounded"
      />

      {/* Display the venue name in black text */}
      <h2 className="text-xl font-bold mt-2 text-black">
        {venueName}
      </h2>

      
      {children}

      
      {showMore && (
        <p className="mt-2 text-gray-600">
          More details about <b>{venueName}</b> can go here...
        </p>
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {showMore ? 'Hide' : 'Show'} Details
      </button>
    </div>
  );
}
