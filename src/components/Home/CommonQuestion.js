import React from "react";

const CommonQuestion = () => {
  return (
    <div className="bg-blue-800">
      <div className=" container mx-auto py-16">
        <h1 className="text-white text-center">Common Question </h1>
        <h1 class="text-4xl text-white text-center font-bold">
          Frequently asked questions
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1  mt-8 gap-4">
            <div
              tabindex="3"
              class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium">
                What kind of data can I see in FieldX?
              </div>
              <div class="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
            <div
              tabindex="4"
              class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium">
                Does Bizzy read my customers' data?
              </div>
              <div class="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
            <div
              tabindex="6"
              class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium">
                What's your refund and cancellation policy?
              </div>
              <div class="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8 gap-4">
            <div
              tabindex="0"
              class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium">
                How do you take payments?
              </div>
              <div class="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
            <div
              tabindex="1"
              class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium">
                Can I also track website analytics on fieldX?
              </div>
              <div class="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
            <div
              tabindex="2"
              class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div class="collapse-title text-xl font-medium">
                What makes Bizzy different from other analytics tools?
              </div>
              <div class="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonQuestion;
