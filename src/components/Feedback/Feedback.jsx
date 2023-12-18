import React from 'react';
import css from './Feedback.module.css';
const Feedback = ({ options, updateFeedback }) => (
  <div className={css.feedback}>
    {options.map(option => (
      <button
        className={css.button}
        key={option}
        onClick={() => updateFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
export default Feedback;
