import React from "react";
import monitor from "../../Media/monitor-mobbile.png";
import user from "../../Media/users.png";
import cup from "../../Media/cup.png";
import people from "../../Media/people.png";
const Stat = () => {
  return (
    <div className='mt-10 mx-4'>
    <div className="my-5 w-full stats stats-vertical lg:stats-horizontal shadow">

      <div className="stat place-items-center">
        
        <div className="stat-title">
            <img src={monitor} alt="" />
        </div>
        <div className="stat-value text-primary">10+</div>
        <div className="stat-desc">Platforms Created</div>
      </div>
      
      <div className="stat place-items-center">
        
        <div className="stat-title">
            <img src={people} alt="" />
        </div>
        <div className="stat-value text-primary">1559+</div>
        <div className="stat-desc">Total Users</div>
      </div>
      <div className="stat place-items-center">
        
        <div className="stat-title">
            <img src={user} alt="" />
        </div>
        <div className="stat-value text-primary">10+</div>
        <div className="stat-desc">Total Clients</div>
      </div>
      <div className="stat place-items-center">
        
        <div className="stat-title">
            <img src={cup} alt="" />
        </div>
        <div className="stat-value text-primary">300 DAYS</div>
        <div className="stat-desc">In Operations</div>
      </div>

    </div>
  </div>
  );
};

export default Stat;
