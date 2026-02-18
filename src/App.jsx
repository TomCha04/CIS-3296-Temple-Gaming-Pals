import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Temple Gaming Pals 🎮</h1>
      <h3>Proof of Concept: Operational</h3>
      <p>Target: Verified Temple University Students [cite: 21, 45]</p>
      
      <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
        <button onClick={() => alert('Linking Steam Account...')}>
          Link Steam Account [cite: 22]
        </button>
        <button onClick={() => alert('Searching for matches...')}>
          Find Matches [cite: 23]
        </button>
      </div>
    </div>
  );
}

export default App;
