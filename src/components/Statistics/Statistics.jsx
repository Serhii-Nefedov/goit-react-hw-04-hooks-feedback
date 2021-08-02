import PropTypes from 'prop-types';

import Section from '../Section';
import Notification from '../Notification';

import s from './Statistics.module.css';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  const totalFeedback = total(good, neutral, bad);
  const positiveFeedback = positiveFeedbackPercentage(good, neutral, bad);

  return (
    <Section title={title}>
      {total(good, neutral, bad) > 0 ? (
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {totalFeedback}</li>
          <li className={s.item}>Positive feedback: {positiveFeedback}</li>
        </ul>
      ) : (
        <Notification />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;