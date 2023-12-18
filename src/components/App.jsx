import { useState } from 'react';
import React from 'react';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Notification from './Notifications/Notification';
import Statistics from './Notifications/Statistics/Statistics';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositivePercentage = () => {
    const total = countTotalFeedback();

    return total === 0 ? 0 : Math.round((good / total) * 100);
  };
  const total = countTotalFeedback();
  const options = Object.keys({ good, neutral, bad });
  const percentage = countPositivePercentage();
  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback options={options} updateFeedback={updateFeedback} />
      </Section>

      {total === 0 ? (
        <Section title="Statistics">
          <Notification message={'There is no feedback yet'} />
        </Section>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        </Section>
      )}
    </div>
  );
};
