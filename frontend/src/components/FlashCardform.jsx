import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from '../context/Appcontext';

const FlashCardForm = () => {
  const [textInput, setTextInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { setFlashcards, axios } = useAppContext();

  const maxTextLength = 5000;

  const handleTextChange = (e) => {
    if (e.target.value.length <= maxTextLength) {
      setTextInput(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!textInput.trim()) {
      return toast.error('Please enter some notes.');
    }

    try {
      setLoading(true);
      toast.loading('Generating flashcards...');

      const { data } = await axios.post('/api/generate', { text: textInput });

      if (data.success) {
        setFlashcards(data.flashcards);
        console.log(data.flashcards);
        toast.success('Flashcards generated successfully!');
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      toast.error(error.message || 'API call failed');
    } finally {
      setLoading(false);
      toast.dismiss();
      setTextInput('');
    }
  };

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-white p-4 sm:p-10 rounded-xl shadow-md w-full max-w-xl mx-auto"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
          Enter Notes
        </h2>

        <textarea
          className="border-2 border-blue-200 rounded-lg p-3 min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg resize-y"
          placeholder="Paste your notes here..."
          value={textInput}
          onChange={handleTextChange}
          maxLength={maxTextLength}
        />
        <p className="text-xs md:text-sm text-gray-500 text-right">
          {textInput.length}/{maxTextLength} characters
        </p>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 text-sm md:text-lg bg-blue-800 text-white font-semibold py-1 sm:py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate FlashCards'}
        </button>
      </form>
    </div>
  );
};

export default FlashCardForm;
