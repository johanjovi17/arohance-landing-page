import React from "react";
import { useEffect } from "react";

const IncrementalCounter = () => {
  useEffect(() => {
    // incremental counter function
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);

      // Clean up the interval on component unmount
      return () => clearInterval(counter);
    }, []);

    // Empty dependency array ensures this effect runs only once on component mount
  }, []);

  return (
    <div className="incremental-counter-container">
      <div className="incremental-counter-central-content">
        <div className="incremental-counter-box">
          <span className="num" data-val="100">
            000
          </span>
          <p className="incremental-counter-title">PROJECTS</p>
        </div>
        <div className="incremental-counter-box">
          <span className="num" data-val="50">
            000
          </span>
          <p className="incremental-counter-title">HAPPY CLIENTS</p>
        </div>
        <div className="incremental-counter-box">
          <span className="num" data-val="12">
            000
          </span>
          <p className="incremental-counter-title">TEAM MEMBERS</p>
        </div>
      </div>
    </div>
  );
};

export default IncrementalCounter;
