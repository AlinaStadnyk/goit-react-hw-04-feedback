import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div className={css.statistics}>
      <ul className={css.list}>
        <li className={css.item}>Good :{good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total} </li>
        <li className={css.item}>Positive feedback: {percentage}</li>
      </ul>
    </div>
  );
};
export default Statistics;
