import logo from './logo.svg';
import './App.css';
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Modal from './Components/Modal/Modal.js';
import "./Components/Modal/Modal.css";

const actions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

function calculateWinner(action1, action2) {
  if(action1 === action2){
    return 0;
  } else if (actions[action1] === action2){
    return -1;
  } else {
    return 1;
  }
}

function ActionIcon ({ action, ...props }) {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
  };

  const Icon = icons[action];
  return (
    <Icon {...props} />
  );
}

function GamePlayer({name = "Player", score = 0, action="rock"}) {
  return (
    <div className="player">
      <div className="score">{`${name}: ${score}`}</div>
      <div className="action">
        {action && <ActionIcon action={action} size={100} />}
      </div>
    </div>
  );
}

function ActionButton({ action = "rock", onActionSelected }) {
  return (
    <button className="move-btn" onClick={() => onActionSelected(action)}>
      <ActionIcon action={action} size={50} />
    </button>
  );
}

function ShowWinner({winner = 0}) {
  const text = {
    "-1": "You Win!",
    0: "It's a Tie!",
    1: "You Lose!",
  };

  return (
    <h2>{text[winner]}</h2>
  )
}


function App() {
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();

    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);

    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
  };

  const resetCounter = () => {
    setPlayerScore(0);
    setComputerScore(0);
  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <div className="container">
      <div className="inner-container">
        <h1>Rock, Paper, Scissors Game!</h1>
        <div className="score-board">
          <GamePlayer name="Player" score={playerScore} action={playerAction}/>
          <GamePlayer name="Computer" score={computerScore} action={computerAction}/>
        </div>
        <div className="button-container">
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>
        <ShowWinner winner={winner} />
        <div>
          <button onClick={resetCounter} className="btn-reset">Reset</button>
        </div>
        <div className="modal-btn-container">
        { <Modal />}
        </div>
      </div>
    </div>
  );
}

export default App;
