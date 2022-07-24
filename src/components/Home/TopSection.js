import React from "react";
import fullDash from "../../Media/fullDash.png";
const TopSection = () => {
  return (
    <>
      <div className="hero demo-wrap pt-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">
              Analytics that transform your product inside-out
            </h1>

            <button className="btn m-4 btn-primary">Request for Demo</button>
            <button className="btn m-4 btn-outline btn-primary">Download</button>
          </div>
        </div>
      </div>
      <div>
        <img className="fullDash mx-auto" src={fullDash} alt="Dashboard Demo" />
      </div>
    </>
  );
};

export default TopSection;
