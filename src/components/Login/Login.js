import React from "react";
import Header from "../Header/Header";
import Footer from './../Footer/Footer';
import background from "../../Media/bgdot.png";

const Login = () => {
  return (
    <div>
     <div style={{ backgroundImage: `url(${background})` }}>
     <Header/>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row">
          <section class="h-screen">
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
                  <h1 className="text-center font-bold mb-3 text-3xl">Please Login</h1>
                  <form>
                    <div class="mb-6">
                      <input
                        type="text"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="User ID"
                      />
                    </div>

                    <div class="mb-6">
                      <input
                        type="password"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      type="submit"
                      class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Log in
                    </button>

                  </form>
                    <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                      <p class="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>
                    <h1 className="text-xl text-center">Don’t have any account?  <span className="text-primary">Sign Up</span></h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
     </div>
      <Footer/>
    </div>
  );
};

export default Login;
