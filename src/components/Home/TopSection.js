import React from "react";
import fullDash from "../../Media/fullDash.png";
const TopSection = () => {
  return (
    <>
      <div class="hero demo-wrap pt-20">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-3xl font-bold">
              Analytics that transform your product inside-out
            </h1>

            <button class="btn m-4 btn-primary">Request for Demo</button>
            <button class="btn m-4 btn-outline btn-primary">Download</button>
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
