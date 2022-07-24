import React from "react";

const CommonQuestion = () => {
  return (
    <div className="bg-blue-800">
      <div className=" container mx-auto py-16">
        <h1 className="text-white text-center">Common Question </h1>
        <h1 className="text-4xl text-white text-center font-bold">
          Frequently asked questions
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1  mt-8 gap-4">
            <div
              tabindex="3"
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                What kind of data can I see in FieldX?
              </div>
              <div className="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
            <div
              tabindex="4"
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                Does Bizzy read my customers' data?
              </div>
              <div className="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
            <div
              tabindex="6"
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                What's your refund and cancellation policy?
              </div>
              <div className="collapse-content">
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
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                How do you take payments?
              </div>
              <div className="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
            <div
              tabindex="1"
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                Can I also track website analytics on fieldX?
              </div>
              <div className="collapse-content">
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in voluptate.
                </p>
              </div>
            </div>
            <div
              tabindex="2"
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                What makes Bizzy different from other analytics tools?
              </div>
              <div className="collapse-content">
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
