import React, { useEffect, useRef } from 'react';
import FlashCardform from '../components/FlashCardform';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/Appcontext';
import FlashCard from '../components/FlashCard';

const Generating = () => {
  const { flashcards } = useAppContext();
  const flashcardRef = useRef(null);

  useEffect(() => {
    if (flashcards && flashcards.length > 0) {
      flashcardRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [flashcards]);

  return (
    <div className="p-12 h-full bg-gradient-to-r from-white via-blue-200 to-blue-500
">
      <NavLink to="/" className="text-2xl font-bold text-[#01194e]">
        FlashGen
      </NavLink>

      <FlashCardform />

      {flashcards.length > 0 && (
        <div ref={flashcardRef} className="mt-10">
          <h3 className="text-3xl text-blue-950 font-semibold mb-4 text-center">Flashcards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {flashcards.map((flash, index) => (
              <FlashCard
                key={index}
                question={flash.question}
                answer={flash.answer}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Generating;
