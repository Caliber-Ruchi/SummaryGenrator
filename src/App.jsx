import React, { useState } from 'react';
import InputForm from './components/InputForm';
import SummaryOutput from './components/SummaryOutput';

function App() {
  const [summary, setSummary] = useState(null);

  return (
    <div>
      <InputForm setSummary={setSummary} />
      <SummaryOutput summary={summary} />
    </div>
  );
}

export default App;
