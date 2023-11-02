import StatisticCard from "./StatisticCard";
import "./Statistics.css";
import { data } from "./data";

function Statistics() {
  return (
    <div className="StatisticsBox">
      <h1 className="StatisticsBox-Title">Advanced Statistics</h1>
      <p className="StatisticsBox-Para">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="StatisticsBox-Cards">
        {data.map((staticEl, id) => (
          <StatisticCard key={id} staticData={staticEl} />
        ))}
      </div>
    </div>
  );
}
export default Statistics;
