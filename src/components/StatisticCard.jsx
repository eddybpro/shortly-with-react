import "./StatisticCard.css";
import PropTypes from "prop-types";

function StatisticCard({ staticData }) {
  return (
    <div className="StatisticBox">
      <div className="StatisticBox-IconBox">
        <img src={staticData.icon} alt="" />
      </div>
      <h1 className="StatisticBox-Title">{staticData.title}</h1>
      <p className="StatisticBox-Para">{staticData.desc}</p>
    </div>
  );
}

StatisticCard.propTypes = {
  staticData: PropTypes.object,
};

export default StatisticCard;
