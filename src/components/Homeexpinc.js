import React from "react";

const Homeexpinc = () => {
  return (
    <div className="container">
      <div className="homeincexp">
        <div className="home-exp-inc-inner">
          <p>income</p>
          <p className="text-green"><span className="naira">N</span> 522.95</p>
        </div>
        <div className="home-exp-inc-inner">
          <p>expense</p>
          <p className="text-red"><span className="naira">N</span> 86.45</p>
        </div>
        <div className="home-exp-inc-inner">
          <p>total bills</p>
          <p><span className="naira">N</span> 53.25</p>
        </div>
        <div className="home-exp-inc-inner">
          <p>savings</p>
          <p><span className="naira">N</span> 120.99</p>
        </div>
      </div>
    </div>
  );
};

export default Homeexpinc;
