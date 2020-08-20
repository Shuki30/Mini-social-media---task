import React from 'react';
import Renderpost from './PostComponent';

const Newsfeed = (props) => {

  const allposts = props.posts.map((post) => {
    var comments = (props.comments.filter((comment => comment.postid.toString() === post.id.toString())));
    console.log(comments);
    return (
        <div className="container">
        <Renderpost post={post} Comments={comments}/>
        </div>
    );
  });

  return (
    <div>
      {allposts}
    </div>
  );
};

export default Newsfeed;
