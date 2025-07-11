import main from '../configs/gemini.js';

export const generateContent = async (req, res) => {
  try {
    const { text,num } = req.body;

    if (!text || text.trim().length < 20) {
      return res.status(400).json({ success: false, message: "Please enter valid notes (at least 20 characters)." });
    }

    const prompt = `
You are an AI flashcard generator. Read the notes below and generate exactly ${num} flashcards as a JSON array.

IMPORTANT:
- Return exactly ${num} items.
- Each flashcard must be an object with "question" and "answer" fields.
- DO NOT return anything else (no markdown, code blocks, explanation).
- Just output raw JSON array.

Notes:
"""
${text}
"""

Output example:
[
  { "question": "What is...", "answer": "It is..." },
  ...
]
`;


    const rawOutput = await main(prompt);
    console.log('Gemini raw output:', rawOutput);

    const flashcards = extractJson(rawOutput);

    if (!flashcards || !Array.isArray(flashcards)) {
      return res.status(500).json({ success: false, message: "Couldn't parse flashcards from Gemini response." });
    }

    res.json({ success: true, flashcards });

  } catch (error) {
    console.error('AI generation error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

function extractJson(text) {
  const clean = text
    .replace(/```json/g, '')
    .replace(/```/g, '')
    .trim();

  try {
    return JSON.parse(clean);
  } catch (err) {
    console.error('JSON parse error:', err.message);
    return null;
  }
}
