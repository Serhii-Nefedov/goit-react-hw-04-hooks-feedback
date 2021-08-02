import { useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    return Math.round(100 / ((good + neutral + bad) / good)) + '%';
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(prev => prev + 1);

      case 'neutral':
        return setNeutral(prev => prev + 1);

      case 'bad':
        return setBad(prev => prev + 1);

      default:
        break;
    }
  };

  return (
    <>
      <FeedbackOptions
        title="Please leave feedback"
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        title="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </>
  );
}