import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {/* {title.length > 0 && <h2>{title}</h2>} */}
      <h2>{title}</h2>
      <ul>
        {stats.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
