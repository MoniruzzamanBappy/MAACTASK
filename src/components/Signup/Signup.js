import React from "react";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import background from "../../Media/bgdot.png";

const Signup = () => {
  const handleSignup = async (e) => {
    e.preventDefault();
    const employeeId = e.target.employeeId.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.number.value;
    const role = e.target.role.value;
    const passwordConfirm = e.target.confirmPassword.value;
    var raw = {
      name,
      email,
      employeeId,
      password,
      passwordConfirm,
      role,
      phoneNumber,
    };

    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    fetch("https://staging-api.erpxbd.com/api/v1/users/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row">
            <section>
              <div class="container px-6 py-6 h-full">
                <div class="flex justify-center items-center flex-wrap  g-6 text-gray-800">
                  <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                      class="w-full"
                      alt="PhoneImage"
                    />
                  </div>
                  <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                    <h1 className="text-center font-bold mb-3 text-3xl">
                      Create Account
                    </h1>
                    <p className="text-center my-4">
                      Fill in the details below to create an account
                    </p>
                    <form onSubmit={handleSignup}>
                      <div class="mb-6">
                        <input
                          type="text"
                          name="name"
                          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Your Full Name"
                        />
                      </div>

                      <div class="mb-6">
                        <input
                          type="email"
                          name="email"
                          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Your Email"
                        />
                      </div>

                      <div class="mb-6">
                        <input
                          type="text"
                          name="employeeId"
                          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="User ID"
                        />
                      </div>

                      <div class="mb-6">
                        <input
                          type="number"
                          name="number"
                          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div class="mb-6">
                        <input
                          type="password"
                          name="password"
                          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Password"
                        />
                      </div>

                      <div class="mb-6">
                        <input
                          type="password"
                          name="confirmPassword"
                          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Confirm Password"
                        />
                      </div>

                      <div class="mb-6">
                        <select
                          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          name="role"
                        >
                          <option value="HUB">HUB</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Create Account
                      </button>
                    </form>
                    <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                      <p class="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>
                    <h1 className="text-xl text-center">
                      Already have an account?{" "}
                      <span className="text-primary">Sign in</span>
                    </h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
