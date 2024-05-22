import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="inner-container">
      <h1>Rock, Paper, Scissors Game!</h1>
        <div className="score-board">
          <div className="player">
            <div>You: 0</div>
            <div></div>
          </div>
          <div className="player">
            <div>Computer: 0</div>
            <div></div>
          </div>
        </div>
        <div>
          <button className="move-btn">Rock</button>
          <button className="move-btn">Paper</button>
          <button className="move-btn">Scissors</button>
        </div>
        <h2>You win!</h2>
      </div>

    </div>
  );
}

export default App;
