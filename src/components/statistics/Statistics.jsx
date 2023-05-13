import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {!!title && <h2>{title}</h2>}
      <ul>
        {stats.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
