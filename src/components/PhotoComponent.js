import React from 'react';
function Renderphoto({post}){
  return(
        <a className="photo_card col-sm-6" href={`/post/${post.id}`}>
          <img src={post.image} className="photo" alt="yy"/>
        </a>
  );
}

export default Renderphoto;
