import PropTypes from 'prop-types';
import { v4 as uuidv4 } from "uuid";
import Section from '../Section';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ title, options, onLeaveFeedback }) => {
  return (
    <Section title={title}>
      <ul className={s.list}>
        {options.map(option => {
          return (
            <li key={uuidv4()}>
              <button
                type="button"
                className={s.button}
                onClick={() => onLeaveFeedback(option)}
              >
                {option[0].toUpperCase() + option.slice(1)}
              </button>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;