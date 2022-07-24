import React from "react";
import { useNavigate } from 'react-router-dom';

const CreateRegion = () => {
    const navigate = useNavigate();
  const handleCreateRegion = async (e) => {
    e.preventDefault();
    const name = e.target.region.value;
    let raw = {
      name
    };
    async function fetchData() {
      const response = await fetch(
        "https://staging-api.erpxbd.com/api/v1/region",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(raw),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        navigate("/dashboard");
      }
    }
    fetchData();
  };
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Region</h2>
          <form onSubmit={handleCreateRegion}>
            <div className="mb-6">
              <input
                type="text"
                name="region"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="type region"
              />
            </div>

            <button
              type="submit"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Add Region
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRegion;
