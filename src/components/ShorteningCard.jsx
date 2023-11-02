import { useEffect, useRef, useState } from "react";
import "./ShorteningCard.css";
const baseUrl = "https://api.apilayer.com/short_url/hash";
import PropTypes from "prop-types";

function ShorteningCard({ addToShortenedList }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [isError, setIsError] = useState(false);
  const myRef = useRef();

  const myHeaders = new Headers();
  myHeaders.append("apikey", "JZoX9Oe27pyRBfRQLSia7Oek2x06SILq");

  const raw = originalUrl;

  const requestOptions = {
    method: "POST",
    redirect: "follow",
    headers: myHeaders,
    body: raw,
  };

  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  const handleShortenUrl = async () => {
    if (!urlRegex.test(originalUrl)) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
      try {
        const data = await fetch(baseUrl, requestOptions);
        const res = await data.json();
        if (data.ok) {
          addToShortenedList([res.long_url, res.short_url]);
          myRef.current.value = "";
          setOriginalUrl("");
        } else {
          console.log("not valid url");
        }
      } catch (error) {
        console.log("fetch error: " + error);
      }
    }
  };

  useEffect(() => {
    if (originalUrl.length) {
      handleShortenUrl();
    }
  }, []);
  return (
    <div className="ShortenCard">
      <label htmlFor="url">
        <input
          type="url"
          name="url"
          id="url"
          aria-label="url"
          className={
            isError ? "ShortenCard-Input errorInput" : "ShortenCard-Input"
          }
          placeholder="Shorten a link here..."
          ref={myRef}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        {isError && <p className="error">Please add a link</p>}
      </label>
      <button className="ShortenCard-Btn" onClick={handleShortenUrl}>
        Shorten it!
      </button>
    </div>
  );
}

ShorteningCard.propTypes = {
  addToShortenedList: PropTypes.func,
};

export default ShorteningCard;
