import React, { useState } from 'react';

const FlashCard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-90 m-10 cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 ${flipped ? 'rotate-y-180' : ''}`}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s',
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-blue-900 rounded-xl shadow-md flex flex-col items-center justify-center p-5"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <p className="text-xl font-semibold text-white text-center">{question}</p>
          <p className='text-pink-100 ml-40 mt-30 text-xs'>Click to view Answer</p>
        </div>
        
        {/* Back */}
        <div
          className="absolute w-full h-full font-semibold bg-white border-4 border-blue-900 rounded-xl shadow-md flex items-center justify-center p-4"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <p className="text-lg text-center">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
