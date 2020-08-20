import React from 'react';

function Renderdetail({user}){
  return(
      <div className="bio_container">
        <div className="col-md-3 nopadding">
          <img src={user.dp} className="profile_pic" alt="propic" />
        </div>
        <div className="col-md-4 nopadding">
          <p className="profile_name">
          {user.username}
          </p>
          <p className="bio">
            {user.bio}
          </p>
        </div>
        <div className="col-md-5">
        </div>
      </div>
  );
}

export default Renderdetail;
