import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegionTable from "./RegionTable";

const Region = () => {
  const [region, setRegion] = useState([]);
  async function fetchData() {
    const response = await fetch(
      "https://staging-api.erpxbd.com/api/v1/region/20/1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const data = await response.json();
    setRegion(data.region);
    console.log(data);
  }
  fetchData();
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1"></div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link className="btn text-white" to="/dashboard/regionCreate">
                + Create New
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='mx-4'>
        <table className="table  w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {region?.map((item, index) => (
              <RegionTable
                key={item._id}
                index={index}
                item={item}
              ></RegionTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Region;
