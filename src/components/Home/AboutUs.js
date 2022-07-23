import React from "react";

import dash from "../../Media/dash.png";
import background from "../../Media/bgdot.png";
import user from "../../Media/user.png";
import Stat from "./Stat";

const AboutUs = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={dash}
            alt="PhoneImage"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="font-bold">About Us</h1>
            <h1 class="text-5xl font-bold">
              A dedicated solution for startups and enterprises
            </h1>
            <p class="py-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex gap-4">
                  <div class="avatar">
                    <div class="w-24 rounded-full">
                      <img
                        alt="user"
                        src={user}
                      />
                    </div>
                  </div>
                  <div>
                    <p class="py-6">
                      "Fieldx is for teams that care about their product
                      growth."
                    </p>
                    <h1 className="text-xl font-bold">CEO, FieldX</h1>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <Stat/>
    </div>
  );
};

export default AboutUs;
