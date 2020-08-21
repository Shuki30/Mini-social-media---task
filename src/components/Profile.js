
import React from 'react';
import Renderphoto from './PhotoComponent';
import Renderdetail from './Profile_details';
import {Button} from 'reactstrap';

const Profile = (props) => {

  var user = props.user;
  var posts = props.posts.filter( post => post.userid.toString() === (user.id.toString()) );
  console.log(posts);
  const allposts = posts.map((post) => {
    return (
          <Renderphoto post={post}/>
    );
  });


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
