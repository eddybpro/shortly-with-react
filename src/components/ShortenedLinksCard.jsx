import { useState } from "react";
import "./ShortenedLinksCard.css";
import PropTypes from "prop-types";

function ShortenedLinksCard({ link }) {
  const [isCopied, setIsCopied] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(link.links[1]);
    setIsCopied(true);
  };
  return (
    <div className="shortLinksBox">
      <div>
        <p>{link.links[0]}</p>
        <p>{link.links[1]}</p>
      </div>
      <button
        className={isCopied ? "shortLinksBox-Btn copied" : "shortLinksBox-Btn"}
        onClick={copyLink}
      >
        {isCopied ? "copied!" : "copy"}
      </button>
    </div>
  );
}

ShortenedLinksCard.propTypes = {
  link: PropTypes.object,
};

export default ShortenedLinksCard;
