import React, { useState } from "react";
import "./ScoreWidget.css";

const ScoreWidget = (props) => {
  const [score, setScore] = useState(props.score);

  const voteHandler = (inc) => {
    setScore((prevScore) => prevScore + inc);
  };

  return (
    <div className='vote-widget'>
      <button
        type='button'
        className='vote-btn up-vote'
        onClick={() => voteHandler(1)}
      ></button>
      <div className='vote-count'>
        <span id='score'>{score}</span>
      </div>
      <button
        type='button'
        className='vote-btn down-vote'
        onClick={() => voteHandler(-1)}
      ></button>
    </div>
  );
};

export default ScoreWidget;
