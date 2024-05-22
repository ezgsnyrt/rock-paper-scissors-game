import logo from './logo.svg';
import './App.css';
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <div className="inner-container">
      <h1>Rock, Paper, Scissors Game!</h1>
        <div className="score-board">
          <div className="player">
            <div className="score">You: 0</div>
            <div></div>
          </div>
          <div className="player">
            <div className="score">Computer: 0</div>
            <div></div>
          </div>
        </div>
        <div>
          <button className="move-btn"><FaHandRock /></button>
          <button className="move-btn"><FaHandPaper /></button>
          <button className="move-btn"><FaHandScissors /></button>
        </div>
        <h2>You win!</h2>
      </div>

    </div>
  );
}

export default App;
