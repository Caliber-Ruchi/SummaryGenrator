import React, { useState, useEffect } from 'react';
import { fetchLanguages, fetchChapters, generateSummary } from '../utils/api';

export default function InputForm({ setSummary }) {
  const [subject] = useState('Mathematics');
  const [className] = useState('Class 10');
  const [language, setLanguage] = useState('');
  const [chapter, setChapter] = useState('');
  const [languages, setLanguages] = useState([]);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetchLanguages().then(setLanguages);
    fetchChapters(subject, className).then(setChapters);
  }, []);

  const handleGenerate = async () => {
    console.log('Generate button clicked');
  
    if (!language || !chapter) {
      alert('Please select both chapter and language');
      return;
    }
  
    const payload = { subject, chapter, language, class_name: className };
    console.log('Payload to send:', payload);
  
    try {
      const res = await generateSummary(payload);
      console.log('Response from API:', res);
      
      if (res.summary_data) {
        setSummary(res);
      } else {
        alert('No summary received. Please try again.');
      }
    } catch (error) {
      console.error('Error in generateSummary:', error);
      alert('Something went wrong while calling the API.');
    }
  };
  
  

  return (
    <div className="container">
      <h1 className="text-xl font-bold mb-4">Summary Generator</h1>

      <div className="mb-4">
        <label>Subject</label>
        <select disabled value={subject}><option>{subject}</option></select>
      </div>

      <div className="mb-4">
        <label>Chapter</label>
        <select value={chapter} onChange={e => setChapter(e.target.value)}>
          <option value="">Select Chapter</option>
          {chapters.map((ch, index) => (
            <option key={index} value={ch}>{ch}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label>Language</label>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="">Select Language</option>
          {languages.map((lang, index) => (
            <option key={index} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
}
