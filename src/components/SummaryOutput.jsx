import React from 'react';
// import //../../styles.css;

export default function SummaryOutput({ summary }) {
  console.log('SummaryOutput received:', summary);

  if (!summary || !summary.summary_data) return null;

  const { story_summary, bullet_points, important_formulas, key_theorems } = summary.summary_data;

  return (
    <div className="container ">
      <h2 className="text-green-400 text-lg font-bold mb-4" style={{ color: '#b0ff25' }}>Summary Output</h2>

      {/* Story Summary */}
      {story_summary && (
        <div className="mb-4">
          <h3 className="text-yellow-400 text-md font-semibold " style={{ color: '#b0ff25' }}>{summary.chapter_name}</h3>
          <p className="text-white">{story_summary}</p>
        </div>
      )}

      {/* Bullet Points */}
      {bullet_points && bullet_points.length > 0 && (
        <div className="mb-4">
          <h3 className="text-yellow-400 text-md font-semibold" style={{ color: '#b0ff25' }}>Key Points</h3>
          <ul className="list-disc pl-6 text-white">
            {bullet_points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Theorems */}
      {key_theorems && key_theorems.length > 0 && (
        <div className="mb-4">
          <h3 className="text-yellow-400 text-md font-semibold" style={{ color: '#b0ff25' }}>Key Theorems</h3>
          <ul className="list-disc pl-6 text-white">
          {key_theorems.map((theorem, idx) => (
            <li key={idx}>
                <strong>{theorem.theorem_name}:</strong> {theorem.description}
            </li>
            ))}
          </ul>
        </div>
      )}

      {/* Important Formulas */}
      {important_formulas && important_formulas.length > 0 && (
        <div className="mb-4">
            <h3 className="text-yellow-400 text-md font-semibold"style={{ color: '#b0ff25' }}>Important Formulas</h3>
            <ul className="list-disc pl-6 text-white">
            {important_formulas.map((formula, idx) => (
                <li key={idx}>
                <strong>{formula.formula_name}:</strong> {formula.formula} – {formula.description}
                </li>
            ))}
            </ul>
        </div>
        )}

    </div>
  );
}
