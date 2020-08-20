
import React from 'react';
import Renderphoto from './PhotoComponent';
import Renderdetail from './Profile_details';
import {USERS} from '../shared/users';
import {Button} from 'reactstrap';

const Profile = (props) => {

  const allposts = props.posts.map((post) => {
    return (
          <Renderphoto post={post}/>
    );
  });

  var user = USERS[0];

  return (
      <div>
          <Renderdetail user={user}/>
          <div className="button_container">
            <div className="col-md-7 nopadding">
              <Button className="editbutton">Edit profile</Button>
            </div>
            <div className="col-md-5"></div>
          </div>
          <div className="photo_container">
            {allposts}
          </div>
      </div>
  );
};

export default Profile;
