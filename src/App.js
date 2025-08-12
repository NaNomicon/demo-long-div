import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <div id="scrollarea" style={{
            overflowY: 'scroll',
          }}>
            {Array.from({ length: 200 }, (_, i) => (
              <div key={i}>Item {i}</div>
            ))}
          </div>
          <div id="main-content">
            {Array.from({ length: Math.random() * 100 }, (_, i) => (
              <div key={i}>Content {i}</div>
            ))}
          </div>
        </div>
        <div>
          Footer
        </div>
      </header>
    </div>
  );
}

export default App;
