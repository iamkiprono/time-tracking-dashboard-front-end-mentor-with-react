import { useState } from "react";
import data from "./data/data";

const Homepage = () => {
  // states
  const [duration, setDuration] = useState("daily");



  return (
    <div className="homepage">
      <div className="container">
        <div className="left-card">
          <div className="card-person">
            <img className="jeremy" src="/image-jeremy.png" alt="" />
            <p className="report">Report from</p>
            <p className="name">Jeremy Robson</p>
          </div>
          <div className="timeline">
            <p className={duration === "daily" ? "active": ""} onClick={(e) => setDuration(e.target.textContent.toLowerCase())}>
              Daily
            </p>
            <p className={duration === "weekly" ? "active": ""}  onClick={(e) => setDuration(e.target.textContent.toLowerCase())}>
              Weekly
            </p>
            <p className={duration === "monthly" ? "active": ""} onClick={(e) => setDuration(e.target.textContent.toLowerCase())}>
              Monthly
            </p>
          </div>
        </div>
        <div className="right-cards">
          {data.map((activity) => {
            return (
              <div
                style={{
                  background: `url(${activity.background}) no-repeat left top, linear-gradient(${activity.gradient}, #d13531)`,
                }}
                key={activity.title}
                className="activity-card"
              >
                <div className="activity">
                  <p>{activity.title}</p>
                  <p className="hours">
                    {duration === "daily"
                      ? activity.timeframes.daily.current
                      : duration === "weekly"
                      ? activity.timeframes.weekly.current
                      : activity.timeframes.monthly.current}
                    hrs
                  </p>
                  <p className="last-week">
                    Last week -{" "}
                    {duration === "daily"
                      ? activity.timeframes.daily.previous
                      : duration === "weekly"
                      ? activity.timeframes.weekly.previous
                      : activity.timeframes.monthly.previous}
                    hrs
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
