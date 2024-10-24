import { useState, useEffect } from "react";
import "./styles.css";

export default function ListingAd(props) {
  const [descVisible, setDescVisible] = useState(true);
  const [numVisible, setNumVisible] = useState(false);

  useEffect(() => {
    setDescVisible(false);
  }, []);

  const toogleVisible = () => {
    setDescVisible((prev) => !prev);
  };

  const toogleNumVisible = () => {
    setNumVisible((numVisible) => !numVisible);
  };

  const regex =
    /\b(3\d{3}\s*\d{4}|6\d{3}\s*\d{4}|8\d{3}\s*\d{4}|9[0-8]\d{2}\s*\d{4})\b/g;

  const option = {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  };

  return (
    <div className="App">
      <div className="pic">
        <div className="flag">Launching Soon</div>
        <div className="gradient"></div>
        <img className="mainPic" src={props.pic} />
        <img className="arrow-right" src="/Icon.svg" alt="" />
        <img className="arrow-left" src="/Icon.svg" alt="" />
      </div>
      <div className="mainContent">
        <div className="container">
          <div className="title">
            <div className="title-wrapper">
              <img src="building-icon.svg" alt="" width={40} height={40} />
              <div className="title_content">
                <h1>{props.title}</h1>
                <p className="address">{props.address}</p>
              </div>
            </div>
            <div className="title-desc">
              <p>
                {props.project_type} · {props.year} · {props.ownership_type}
              </p>
              <p>{props.availabilities_label}</p>
            </div>
          </div>

          <div className="pricing">
            <h1>
              {props.psf_min.toLocaleString("en-us", option)} -{" "}
              {props.psf_max.toLocaleString("en-us", option)}
            </h1>
            <p>{props.subprice_label}</p>
          </div>
        </div>
        <div className="description_container">
          {descVisible &&
            props.description.split("\n").map((text, idx) => (
              <p key={idx}>
                {text.split(regex).map((num, i) =>
                  regex.test(num) ? (
                    <span className="number" key={i} onClick={toogleNumVisible}>
                      {numVisible ? num : num.slice(0, num.length - 4) + "XXXX"}
                    </span>
                  ) : (
                    num
                  )
                )}
              </p>
            ))}
        </div>
        <button className="btn_desc" onClick={toogleVisible}>
          {descVisible ? "Hide Description" : "See description"}
        </button>
      </div>
    </div>
  );
}
