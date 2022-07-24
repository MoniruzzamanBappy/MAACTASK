import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import logo from "../../Media/logo.png";

const Dashboard = () => {
  return (
    <>
      <div class="navbar bg-slate-200 ">
        <img src={logo} alt="company logo" />
        <label
          for="my-drawer-2"
          class="navbar-end drawer-button cursor-pointer lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 bg-slate-200 overflow-y-auto w-60 text-base-content">
            <h1>Menu</h1>
            <p className="flex my-3 text-xl justify-center items-center">
              <GrLocation /> <span className="ml-2">Geo Information</span>
            </p>
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className="btn btn-ghost" to="/dashboard">
                Region
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost" to="/dashboard/area">
                Area
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
