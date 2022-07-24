import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AreaTable from './AreaTable';

const Area = () => {
    const [area, setArea] = useState([]);
    async function fetchData() {
      const response = await fetch(
        "",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await response.json();
      setArea(data.region);
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
                <Link className="btn text-white" to="/dashboard/areaCreate">
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
                <th>Area</th>
              </tr>
            </thead>
            <tbody>
              {area?.map((item, index) => (
                <AreaTable
                  key={item._id}
                  index={index}
                  item={item}
                ></AreaTable>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
export default Area;