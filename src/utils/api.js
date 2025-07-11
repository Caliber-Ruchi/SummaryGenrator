// src/utils/api.js

const BASE_URL = 'https://summary-j2xh.onrender.com';

// GET /languages
export const fetchLanguages = async () => {
  try {
    const res = await fetch(`${BASE_URL}/languages`, {
      headers: { accept: 'application/json' }
    });
    return await res.json();
  } catch (err) {
    console.error('Error fetching languages:', err);
    return [];
  }
};

// GET /chapters?subject=Mathematics&class_name=Class 10
export const fetchChapters = async (subject = 'Mathematics', className = 'Class 10') => {
  try {
    const res = await fetch(`${BASE_URL}/chapters?subject=${encodeURIComponent(subject)}&class_name=${encodeURIComponent(className)}`, {
      headers: { accept: 'application/json' }
    });
    return await res.json();
  } catch (err) {
    console.error('Error fetching chapters:', err);
    return [];
  }
};

// POST /generate-summary
export const generateSummary = async ({ subject, chapter, language, class_name }) => {
  try {
    const res = await fetch(`${BASE_URL}/generate-summary`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        chapter,
        language,
        class_name
      })
    });

    if (!res.ok) throw new Error('Failed to generate summary');

    return await res.json();
  } catch (err) {
    console.error('Error generating summary:', err);
    return { summary: 'Something went wrong.' };
  }
};
